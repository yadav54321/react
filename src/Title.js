import React, { useEffect } from "react";

export default function Title() {
  useEffect(() => {
    console.log("Rerendering title");
  });

  return <h1>Title</h1>;
}
