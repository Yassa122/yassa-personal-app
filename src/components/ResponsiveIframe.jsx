import React, { useRef, useEffect, useCallback } from "react";

const ResponsiveIframe = ({ src, width }) => {
  const iframeRef = useRef(null);

  const resize = useCallback(() => {
    const iframe = iframeRef.current;
    const wrapper = iframe?.parentElement;

    if (!iframe || !wrapper) return;

    const wrapperWidth = wrapper.offsetWidth;
    const iframeWidth = iframe.offsetWidth;

    const scale = wrapperWidth / iframeWidth;
    iframe.style.transform = `scale(${scale})`;

    const wrapperHeight = wrapper.offsetHeight;
    const height = wrapperHeight / scale;
    iframe.style.height = `${height}px`;
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ width, transformOrigin: "top left" }}
    />
  );
};

export default ResponsiveIframe;
