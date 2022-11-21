import tls from 'tls'
const TIMEOUT = 1500

const getRemainingDays = date => {
  const expiry = new Date(date).valueOf()
  const now = new Date().valueOf()
  return ((expiry - now) / 1000 / 60 / 60 / 24).toFixed()
}

const getCertExpiry = (host, port, servername, id) => {
  return new Promise((resolve, reject) => {
    const result = {}
    const socket = tls.connect({ host, port, servername })
    socket.setTimeout(TIMEOUT)
    socket.once('secureConnect', () => {
      const peerCert = socket.getPeerCertificate()
      result.validFrom = peerCert.valid_from
      result.validTo = peerCert.valid_to
      result.tls_module_error = false
      result.tls_message = ''
      socket.destroy()
    })
    socket.once('close', () => resolve(result))
    socket.once('error', (e) => reject({ tls_message: e.message, tls_module_error: true}))
    socket.once('timeout', () => {
      socket.destroy(new Error(`Timeout after ${TIMEOUT} ms for ${servername}:${port}`))
    })
  })
}

const checkCertExpiration = async (host, port = 443, servername = host) => {
  const { validTo } = await getCertExpiry(host, port, servername)
  const remainingDays = getRemainingDays(validTo)
  return { valid_to: validTo, remaining_days: remainingDays }
}

const certicatesInformation = async (domains) => {
  // const domains = ['google.com', 'facebook.com', 'wtcx.dev', '??????????.com']
  const tasks = domains.map((domain, i) => checkCertExpiration(domain.host))
  const results = await Promise.allSettled(tasks)
  const promtedValues = []

  for (let i = 0; i < domains.length; i++) {
    const result = results[i]
    promtedValues.push(result.status === 'fulfilled' ? 
        {...result.value, id: i+ 1} : 
        {...result.reason , id: i+ 1})
  }
  return promtedValues
}

export default certicatesInformation;