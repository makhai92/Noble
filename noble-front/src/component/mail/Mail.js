import React, { useState, useEffect, useRef } from "react";
import "./Mail.css";

const Mail = () => {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState("940px");

  useEffect(() => {
    const Message = (event) => {
      if (event.data?.type === "setHeight") {
        setHeight(`${event.data.height}px`);
      }
    };

    window.addEventListener("message", Message);
    return () => window.removeEventListener("message", Message);
  }, []);

  return (
    <div id="wrapper">
      <iframe
        ref={iframeRef}
        src={`${process.env.PUBLIC_URL}/mail.html`}
        title="External HTML"
        width="100%"
        height={height}
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Mail;
