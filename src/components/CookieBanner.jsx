import React, { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => {
        setVisible(true);
      }, 1000); // show after 1 sec
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-white shadow-lg rounded-xl p-6 z-50 border border-gray-300 flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-up transition-all">
      <div className="text-sm text-gray-700">
        We use cookies to improve your experience and deliver personalized content.
        See our{" "}
        <a
          href="/cookies"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Cookie Policy
        </a>
        .
      </div>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Accept & Continue
      </button>
    </div>
  );
}
