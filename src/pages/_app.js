// These styles apply to every route in the application
import "./global.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
