import { ReactNode } from "react";
import Header from "../Header";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
