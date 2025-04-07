"use client";
import Page, { usePage } from "@crymson/web/structure/Page";
import { useEffect } from "react";
const { Main } = Page;

type Props = {};
export default function AboutPage({}: Props) {
  const { setStructure } = usePage();
  useEffect(() => {
    setStructure({ title: "About" });
  }, []);
  return <Main title="About">AboutPage</Main>;
}
