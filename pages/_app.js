//import "@/styles/globals.css";
//import "@/styles/fonts.css";
import "../styles/globals.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const script = global.document.createElement("script");
  //   script.innerHTML = `
  //         function googleTranslateElementInit() {
  //           new google.translate.TranslateElement({ pageLanguage: 'bn' }, 'google_translate_element');
  //         }
  //       `;

  //   const translateScript = global.document.createElement("script");
  //   translateScript.src =
  //     "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  //   global.document?.body?.appendChild(script);
  //   global.document?.body?.appendChild(translateScript);

  //   return () => {
  //     global.document?.body?.removeChild(script);
  //     global.document?.body?.removeChild(translateScript);
  //   };
  // }, []);
  return (
    <div className="body" id="google_translate_element">
      <Component {...pageProps} />
    </div>
  );
}
