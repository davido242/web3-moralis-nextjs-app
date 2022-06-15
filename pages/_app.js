import '../styles/globals.css';
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    appId='VRaxLh94NmfSKGnj2xXCprXSAr38ojfHLg3wA5h8' 
    serverUrl='https://z7zog7feyjxe.usemoralis.com:2053/server'>
        {
      <Component {...pageProps} />
        }
    </MoralisProvider>
  );
}

export default MyApp
