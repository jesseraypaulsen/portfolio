import { Header } from "./Header";
import { Body } from "./Body";
import { useState } from "react";

export function App() {
  const [arrowPosition, setArrowPosition] = useState(null);
  return (
    <>
      <Header setArrowPosition={setArrowPosition} />
      <Body arrowPosition={arrowPosition} />
    </>
  );
}
