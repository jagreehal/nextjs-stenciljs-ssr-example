import { useState } from 'react';

function Page({}) {
  const [q, setQ] = useState('world');

  return (
    <>
      <label className="text-gray-500 mr-4">Message</label>
      <input
        type="text"
        onChange={(e: any) => setQ(e.target.value)}
        value={q}></input>

      <hr />
      <div className="my-4 block">
        <fetch-example q={q}></fetch-example>
      </div>
    </>
  );
}

export default Page;
