import { useState } from 'react';
import {
  SlotExample,
  SlotScopedExample,
  ScopedExample,
  ShadowExample,
  SlotShadowExample,
  FetchExample,
} from 'component-library-react';

const Index = () => {
  const [counter, setCounter] = useState(0);
  const [repo, setRepo] = useState('stencil');

  return (
    <div className="hero">
      <h1 className="title">Next.js + Tailwind</h1>
      <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <h2 className="text-gray-800">
        This page shows various stencil server rendered web components
      </h2>
      <h4>slot-example</h4>
      <SlotExample>-SLOT CONTENT-</SlotExample>
      <hr />
      <h4>slot-scoped-example</h4>
      <SlotScopedExample>-SLOT CONTENT-</SlotScopedExample>
      <hr />
      <h4>slot-shadow-example</h4>
      <SlotShadowExample>-SLOT CONTENT-</SlotShadowExample>
      <hr />
      <h4>scoped-example</h4>
      <ScopedExample first="Jag" last="Reehal"></ScopedExample>
      <hr />
      <h4>shadow-example</h4>
      <ShadowExample first="Jag" last="Reehal"></ShadowExample>
      <hr />
      <div className="mt-8">
        <label>
          <input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
          />
        </label>
        <FetchExample q={repo} />
      </div>
    </div>
  );
};

export default Index;
