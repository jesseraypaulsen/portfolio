import { Nav } from "./Nav";
import { Main } from "./Main";
import { useState } from 'react';
import "../styles/app.css";

export function App() {
  const [loadStatus, setLoadStatus] = useState(true)

  return (
    <>
      {loadStatus ? null : <Nav/>}
      <Main loadStatus={loadStatus} setLoadStatus={setLoadStatus} />
      <div className={loadStatus ? "loading" : "loaded"}>Loading...</div>
    </>
  );
}
