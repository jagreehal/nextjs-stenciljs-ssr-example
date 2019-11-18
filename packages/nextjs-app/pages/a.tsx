import React, { useState } from "react";
import useCustomElement from "../lib/use-custom-element";
import Head from "next/head";

function Page({}) {
  const [message, setMessage] = useState("world");
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
        <title>This is page A</title>
      </Head>
      <label style={{ color: "#696969" }}>Message</label>
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

export default Page;
