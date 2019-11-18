const stencil = require('stencil-web-components/hydrate');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/a', async (req, res) => {
    const html = await app.renderToHTML(req, res, '/a', req.query);
    const renderedHtml = await stencil.renderToString(html);
    res.send(renderedHtml.html);
  });
  server.get('/b', async (req, res) => {
    const html = await app.renderToHTML(req, res, '/b', req.query);
    const renderedHtml = await stencil.renderToString(html);
    res.send(renderedHtml.html);
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
