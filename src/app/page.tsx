"use client";
import Copy from "@crymson/ui/common/Copy";
import List from "@crymson/ui/layout/List";
import Nav from "@crymson/web/elements/Nav";
import Footer from "@crymson/web/structure/Footer";
import Header from "@crymson/web/structure/Header";
import Page from "@crymson/web/structure/Page";
import Section from "@crymson/web/structure/Section";
import Image from "next/image";
import Logo from "$logo/juty-logo.svg";
import FullLogo from "$logo/juty-full-logo.svg";
import Button from "@crymson/ui/layout/Button";
import { DarkModeIcon } from "@crymson/svg/icons";

export default function Home() {
  return (
    <>
      <Header
        // overlay
        className="z-[1000] flex h-16 items-center gap-x-4 bg-[red] px-4 py-2 text-white"
      >
        <Logo className="mr-auto h-6" />
        <Nav className="flex gap-x-2" />
        <Button className="grid h-4 place-content-center">
          <DarkModeIcon className="h-3 fill-current" />
        </Button>
      </Header>
      <Page title="Home" className="*:grow">
        <Section title="Landing" className="bg-gray-200 pt-16">
          JuTy
        </Section>
        <Section title="Call to Action" className="bg-gray-100">
          Get A Quote
        </Section>
        <Section title="Gallery" className="bg-gray-300">
          Gallery
        </Section>
      </Page>
      <Footer className="grid grid-cols-2 gap-2 bg-black p-4 text-white">
        <div className="footer-nav grid grid-flow-col grid-rows-4 *:row-span-full *:grid-rows-subgrid">
          <List
            title="Home"
            content={"Gallery/Join/Contact".split("/")}
            noMarker
          />
          <List title="About" content={"Company/Us".split("/")} noMarker />
          <List
            title="Legal"
            content={"Terms of Use/Privacy Policy".split("/")}
            noMarker
          />
        </div>
        <FullLogo className="h-16" />
        <Footer.Copy className="col-span-full place-self-center text-xs" />
      </Footer>
    </>
  );
}
