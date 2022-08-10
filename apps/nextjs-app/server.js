const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const hydrate = require('component-library/hydrate');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 5001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname.startsWith('/_next') || pathname.startsWith('/__next')) {
        await handle(req, res, parsedUrl);
      } else {
        const html = await app.renderToHTML(req, res, pathname, query);
        const renderedHtml = await hydrate.renderToString(html);
        res.end(renderedHtml.html);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
