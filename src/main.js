import express from 'express';
import paths from './paths.js';

const app = express();

app.use(express.json());
app.use(express.static(import.meta.dirname + '/app', { etag: false, lastModified: false }));
app.disable('etag');

app.all(`/*`, async (req, res) => {
    let path = req.url.split('?')[0];

    let file = paths.find((pathData) => typeof pathData.match === 'string' ? path === pathData.match : pathData.match.test(path));
    if (!file) return console.log(`Unknown file for path "${path}"`);

    console.log(`forwarding ${path} to "${file.name}"`);

    file.handler(req, res, path);
});

app.listen(4460, () => console.log(`blooket hacks @ http://localhost:4460`));
