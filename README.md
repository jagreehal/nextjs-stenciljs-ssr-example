# Example of using Next.js and Stencil components with SSR

[![Greenkeeper badge](https://badges.greenkeeper.io/jagreehal/nextjs-stenciljs-ssr-example.svg)](https://greenkeeper.io/)

This is a WIP demo of using server rendered Stencil components in Next.js

It works by using a custom server, and rendering using Next.js and then by Stencil as shown in the example below.

```javascript
const stencil = require("stencil-web-components/hydrate");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/a", async (req, res) => {
    const html = await app.renderToHTML(req, res, "/a", req.query);
    const renderedHtml = await stencil.renderToString(html);
    res.send(renderedHtml.html);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
```

Not sure if there's a way to do this without using a custom server or not having to specify every route ...yet

## trying it out

Install using yarn and then run

```bash
yarn
yarn start
```

more info coming soon!
