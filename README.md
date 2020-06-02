# Example of using Next.js and Stencil components with SSR

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
  server.listen(port, (err) => {
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

import Document from "next/document";
const hydrate = require("../hydrate");
import cheerio from "cheerio";

const StyleTags = ({ styles }) =>
styles.map((inline, index) => (
<style key={index} sty-id={inline.id}>
{inline.inner}
</style>
));

export default class ShopDocument extends Document {
static async getInitialProps(ctx) {
const initialProps = await Document.getInitialProps(ctx);
const res = await hydrate.renderToString(initialProps.html, {
runtimeLogging: true,
});
const s = cheerio.load(res.html);
let styles = [];
s("style").each((i, el) =>
styles.push({ inner: s(el).html(), id: s(el).attr("sty-id") })
);

    return {
      styles: (
        <>
          {initialProps.styles}
          <StyleTags styles={styles} />
        </>
      ),
      html: s("body").html(),
    };

}
}
