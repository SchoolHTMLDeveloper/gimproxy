import fs from 'fs';
import npath from 'path';

export default async (req, res, path) => {
    try {
        if (path.endsWith('/post')) {
            const loginResponse = await fetch('https://www.blooket.com/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: req.body.email,
                    password: req.body.password
                })
            });
            const loginData = await loginResponse.json();

            if (loginData.error) return res.send({ error: loginData.error });
            if (!loginData.user?._id) {
                console.log('couldn\'t login', loginData);
                return res.send({ error: 'unknown error' });
            }

            const setCookie = loginResponse.headers.get('set-cookie');
            if (setCookie) res.setHeader('set-cookie', setCookie);

            return res.send({ success: true });
        }

        if (path.endsWith('/whoami')) {
            const authReq = await fetch('https://www.blooket.com/api/users/check', {
                headers: { cookie: req.headers.cookie || '' }
            });

            const authRes = await authReq.json();

            if (!authRes.user) return res.send({ email: null });
            return res.send({ email: authRes.user.email });
        }

        if (path.endsWith('/logout')) {
            res.setHeader('set-cookie', 'blooket-auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly');
            return res.send({ success: true });
        }

        const loginPage = fs.readFileSync(npath.join(import.meta.dirname, '..', 'app', 'login.html'), 'utf8');
        res.send(loginPage);
    } catch (e) {
        console.error(e, path);
    }
};
