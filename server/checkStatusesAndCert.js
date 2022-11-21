import dataProject from './dataProject.js';
import checkStatuses from './checkStatuses.js';
import certicatesInformation from './tlsCert.js';
import url from 'url';

const checkStatusesAndCert = async () => {

    const domainsData = dataProject.map(el => url.parse(el.project));
    const tasks = await Promise.all([checkStatuses(domainsData), certicatesInformation(domainsData)])
    let resultArray = [];
    let emailDomains = []
    for (let i = 0; i < domainsData.length; i++) {
        if (tasks[0][i].http_error || tasks[1][i].tls_module_error) {
            emailDomains.push({ ...tasks[0][i], ...tasks[1][i] })
        }
        resultArray.push({ ...tasks[0][i], ...tasks[1][i] })
    }
    // console.log(resultArray);
    return resultArray;

}

export default checkStatusesAndCert;