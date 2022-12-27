import Header from "components/Header/Header";
import { useState } from "react";

export default function Layout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header show={show} setShow={setShow} />
      {children}
    </>
  );
}
