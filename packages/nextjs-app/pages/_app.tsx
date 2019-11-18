import React from "react";
import App from "next/app";
import "../register-web-components";
import Nav from "../components/Nav";

export default class MyApp extends App {
  componentDidMount() {
    const {
      applyPolyfills,
      defineCustomElements
    } = require("stencil-web-components/loader");
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Nav />
        <hr />
        <Component {...pageProps} />
      </div>
    );
  }
}
