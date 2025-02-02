// pages/_app.js
import "../pages/_app.js"; // ✅ Import global styles

function MyApp({ Component, pageProps }) {
  // ✅ This ensures that ALL pages get rendered inside this wrapper
  return <Component {...pageProps} />;
}

export default MyApp;
