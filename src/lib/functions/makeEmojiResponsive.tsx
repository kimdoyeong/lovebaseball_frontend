import React from "react";

function makeEmojiResponsive(emoji: string, label: string, tag?: string) {
  const Tag: any = tag || "span";
  return function() {
    return (
      <Tag role="img" aria-label={label}>
        {emoji}
      </Tag>
    );
  };
}

export default makeEmojiResponsive;
