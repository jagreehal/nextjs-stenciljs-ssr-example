import '../css/tailwind.css';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  useEffect(() => {
    const {
      applyPolyfills,
      defineCustomElements,
    } = require('component-library/loader');
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
    return () => {};
  }, []);
  return <Component {...pageProps} />;
}

export default App;
