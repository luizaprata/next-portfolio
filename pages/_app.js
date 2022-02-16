import '../shared/styles/globals.css'
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }) {
  <TopProgressBar />
  return <Component {...pageProps} />
}

export default MyApp
