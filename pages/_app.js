import "@/styles/globals.css";
import "@/styles/fonts.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
          }
        `;

    const translateScript = document.createElement("script");
    translateScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    document.body.appendChild(script);
    document.body.appendChild(translateScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(translateScript);
    };
  }, []);
  return (
    <div className="body" id="google_translate_element">
      <Component {...pageProps} />
    </div>
  );
}
