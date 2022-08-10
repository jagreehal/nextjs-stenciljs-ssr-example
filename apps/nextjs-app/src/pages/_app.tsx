import '../css/tailwind.css';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(typeof window === 'undefined');
  useEffect(() => {
    if (!domLoaded) {
      const {
        applyPolyfills,
        defineCustomElements,
      } = require('component-library/loader');
      applyPolyfills().then(() => {
        defineCustomElements(window);
        setDomLoaded(true);
      });
    }
    return () => {};
  }, []);
  return domLoaded && <Component {...pageProps} />;
}

export default App;
