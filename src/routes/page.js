import fs from 'fs';
import npath from 'path';

export default async (_req, res, path) => {
    try {
        if (path !== '/play') return res.redirect('/play');

        const response = await fetch(`https://www.blooket.com/play`);
        let html = await response.text();

        ['content-type', 'set-cookie'].forEach((header) => {
            if (response.headers.has(header))
                res.setHeader(header, response.headers.get(header));
        });

        // Inject cheat scripts into the page
        html = html.replace(
            `<head>`,
            `<head>
            <script>
                // Blooket cheat functionality
                window.cheatsEnabled = true;
            </script>`
        );

        res.send(html);
    } catch (e) {
        console.error(e, path);
    }
};
