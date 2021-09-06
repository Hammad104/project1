import React, { useEffect, useRef } from "react";

export default function Focusinput() {
  let inputRef = useRef(null);
  let inputReff = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" />
      <input ref={inputReff} type="password" />
    </div>
  );
}
