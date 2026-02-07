import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S0N7RFDCYM"
        strategy="afterInteractive"
      />
      <Script id="ga">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S0N7RFDCYM');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
