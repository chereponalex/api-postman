import express, { urlencoded, json, /* static */ } from 'express';
const router = express.Router();
import checkStatusesAndCert from './checkStatusesAndCert.js';
// import postman from './nodeMailer.js';


router.post('/certificates', async (req, res) => {
    try {
       const resultsPromises = await checkStatusesAndCert();
        res.status(200).send(resultsPromises);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})

export default router;