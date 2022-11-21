import { request } from 'https';

const domainRequest = (domain, id) => {
    return new Promise((resolve, reject) => {
        const options = {
            host: domain.host,
            port: 443,
            path: domain.path,
            method: 'GET'
        };
        const req = request(options, (res) => {
          if (res.statusCode < 200 || res.statusCode > 301) {
                reject({ 
                    id: id + 1, 
                    domain: domain.href, 
                    code: res.statusCode, 
                    http_error: true, 
                    message: '' 
                });
            } else {
                resolve({ 
                    id: id + 1, 
                    domain: domain.href, 
                    code: res.statusCode, 
                    http_error: false, 
                    message:''
                 })
            }
        });
        req.on('error', (e) => {
          reject({ 
            id: id + 1, 
            domain: domain.href, 
            http_error: true, 
            message: e.message 
        });
        });
        req.end()
    });
}

const checkStatuses =  async (domains) => {
    const tasks = domains.map((domain, i) => domainRequest(domain, i))
    const results = await Promise.allSettled(tasks)
    const promtedValues = []

    for (let i = 0; i < domains.length; i++) {
        const result = results[i]
        promtedValues.push(result.status === 'fulfilled' ? 
        {...result.value} : 
        {...result.reason})
      }
    return promtedValues
}

export default checkStatuses;
