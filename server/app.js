
import express, { urlencoded, json, /* static */ } from 'express';
import cors from 'cors';
// import { PORT } from './config.js';
import { join } from 'path';
import routes from './routes.js';
import schedule from 'node-schedule';
import postman from './nodeMailer.js';
import checkStatusesAndCert from './checkStatusesAndCert.js';

const app = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    }),
);

app.use(urlencoded({
    extended: true,
}));
app.use(json());
app.use('/', routes);
// app.use(static(join(__dirname, "..", "dist")));


app.get('/', function (req, res) {
    // console.log(__dirname)
    // res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// 'min, hours, days, month,'
schedule.scheduleJob('0 11,18 * * *', async () => {
    const dontWorkSite = await checkStatusesAndCert();
    const filteredDontWorkSite = dontWorkSite.filter(el => el.http_error === true || el.tls_module_error === true)
    if (filteredDontWorkSite.length > 0) postman(filteredDontWorkSite)
})

const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`Соединение с сервером прошло успешно PORT: ${PORT}`));



