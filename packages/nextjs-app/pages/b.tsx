import React, { useState } from "react";
import useCustomElement from "../lib/use-custom-element";
import Head from "next/head";

function Page({ initialMessage }) {
  const [message, setMessage] = useState(initialMessage);
  const [messages, setMessages] = useState([]);

  const [customElementProps, ref] = useCustomElement({
    "new-message": e => {
      setMessages([...messages, e]);
    },
    message
  });

  return (
    <>
      <Head>
        <title>This is page B with the value set in the query string</title>
      </Head>
      <label>Message</label>
      <input
        type="text"
        onChange={(e: any) => setMessage(e.target.value)}
        value={message}
      ></input>

      <hr />
      <component-with-event
        suppressHydrationWarning={true}
        {...customElementProps}
        ref={ref}
      ></component-with-event>
      <hr />
      <h5>Messages</h5>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </>
  );
}

Page.getInitialProps = async ({ query }) => {
  const initialMessage = query.initialMessage || "Hello";

  return { initialMessage };
};

export default Page;
