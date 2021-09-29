import React, { useState } from "react";
import Head from "next/head";
import { ComponentWithEvent } from 'stencil-react-components';

function Page({}) {
  const [message, setMessage] = useState("world");
  const [messages, setMessages] = useState([]);

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
        <ComponentWithEvent
          message={message}
          onNew-message={e => {
            setMessages([...messages, e.detail]);
          }}
        ></ComponentWithEvent>
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
