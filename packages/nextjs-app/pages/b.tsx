import React, { useState } from "react";
import { ComponentWithEvent } from 'stencil-react-components';
import Head from "next/head";

function Page({ initialMessage }) {
  const [message, setMessage] = useState(initialMessage);
  const [messages, setMessages] = useState([]);

  return (
    <>
      <Head>
        <title>This is page B with the value set in the query string</title>
      </Head>
      <label className="mr-4">Message</label>
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

Page.getInitialProps = async ({ query }) => {
  const initialMessage = query.initialMessage || "Hello";

  return { initialMessage };
};

export default Page;
