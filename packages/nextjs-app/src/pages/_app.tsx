import React from 'react';
import '../css/tailwind.css';
import '../react-component-lib';
import 'stencil-web-components/dist/stencil-web-components/stencil-web-components.css';

function App({ Component, pageProps }) {
  return <Component suppressHydrationWarning={true} {...pageProps} />;
}

export default App;
