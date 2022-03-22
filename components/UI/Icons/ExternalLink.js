import React from "react";

function ExternalLink() {
  return (
    <svg viewBox="0 0 24 24">
      <title>External Link</title>
      <g
        strokeWidth="2.1"
        stroke="var(--color-icon-fill)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="17 13.5 17 19.5 5 19.5 5 7.5 11 7.5"></polyline>
        <path d="M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5"></path>
      </g>
    </svg>
  );
}

export default ExternalLink;
