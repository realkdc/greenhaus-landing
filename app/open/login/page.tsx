"use client";

import { useEffect } from "react";

export default function OpenLoginPage() {
  useEffect(() => {
    // Try to open the app with the greenhaus://open/login scheme
    const appUrl = "greenhaus://open/login";
    
    // Create a hidden iframe to attempt the app launch
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appUrl;
    document.body.appendChild(iframe);

    // Set a timeout to redirect to the app store if the app doesn't open
    const timeout = setTimeout(() => {
      // If we're still here after 2 seconds, the app probably isn't installed
      // Redirect to the app store or fallback page
      window.location.href = "/coming-soon";
    }, 2000);

    // Clean up
    return () => {
      clearTimeout(timeout);
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1>Opening GreenHaus Login...</h1>
      <p>If the app doesn&apos;t open automatically, <a href="/coming-soon">click here</a>.</p>
    </div>
  );
}
