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
      <label className="text-gray-500 mr-4">Message</label>
      <input
        type="text"
        onChange={(e: any) => setMessage(e.target.value)}
        value={message}
      ></input>

      <hr />
      <div className="my-4 block">
        <component-with-event
          suppressHydrationWarning={true}
          {...customElementProps}
          ref={ref}
        ></component-with-event>
      </div>
      <hr />
      <h5 className="mt-4">Messages</h5>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </>
  );
}

export default Page;
