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
import {
  DarkModeIcon,
  LocationIcon,
  PhoneIcon,
  PaperPlaneIcon,
} from "@crymson/svg/icons";
import { useSiteConfig } from "@crymson/web/SiteConfig";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Header
        // overlay
        className="z-[1000] flex h-16 items-center gap-x-4 bg-black px-8 py-2 text-white"
      >
        <Logo className="mr-auto h-8 fill-current" />
        <Nav className="flex gap-x-4" />
        <Button className="grid h-4 place-content-center">
          <DarkModeIcon className="h-4 fill-current" />
        </Button>
      </Header>
      {/* =============[ MAIN ]============= */}
      <Page title="Home" className="*:grow">
        <Section title="Landing" className="bg-gray-100 pt-16">
          JuTy
        </Section>
        <Section title="For Sale" className="bg-gray-200">
          <h2>2056 Gober Ave</h2>
          <List
            bullet="–"
            content={"Move-In Ready/1200 sqft./3 bed, 2.5 bath/2 Car Garage".split(
              "/"
            )}
          />
        </Section>
        <Section title="Transformation" titled className="bg-gray-300">
          Get A Quote
        </Section>
        <Section title="Gallery" className="bg-gray-400">
          Gallery
        </Section>
        <Section title="Testimonials" className="bg-gray-500">
          Testimonials
        </Section>
      </Page>
      {/* ============[ FOOTER ]============ */}
      <Footer className="grid grid-cols-2 gap-x-8 bg-black p-8 text-white gap-4">
        <div className="flex flex-col gap-1 items-start">
          <Logo className="h-12 fill-current" />
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 gap-y-1 items-center place-self-start text-sm">
            {/* <PhoneIcon className="h-4 fill-current aspect-square" /> */}
            <PhoneNum />
            <PaperPlaneIcon className="h-4 fill-current aspect-square" />
            <Email />
            <LocationIcon className="h-4 fill-current aspect-square" />
            <Address />
          </div>
        </div>
        <div className="footer-nav grid grid-flow-col grid-rows-4 *:row-span-full *:grid-rows-subgrid justify-self-end gap-x-8 text-right">
          {Object.entries({
            Home: "Gallery/Join/Contact".split("/"),
            Services: "Construction/Renovation/Management".split("/"),
            About: "Us/Jobs/Training".split("/"),
            Legal: "Terms of Use/Privacy Policy/Cookie Policy".split("/"),
          }).map(([title, content]) => {
            return (
              <List
                key={title}
                title={title}
                content={content}
                noMarker
                titleCss="drop-shadow-[0px_1px_0px_red]"
              />
            );
          })}
          {/* <List
            title="Home"
            content={"Gallery/Join/Contact".split("/")}
            noMarker
          />
          <List
            title="Services"
            content={"Construction/Renovation/Management".split("/")}
            noMarker
          />
          <List
            title="About"
            content={"Us/Jobs/Training".split("/")}
            noMarker
          />
          <List
            title="Legal"
            content={"Terms of Use/Privacy Policy/Cookie Policy".split("/")}
            noMarker
          /> */}
        </div>
        <Footer.Copy className="col-span-full text-center text-xs border-t border-current/10 pt-4" />
      </Footer>
    </>
  );
}

const PhoneNum = () => {
  const config = useSiteConfig();
  if (!config?.contactInfo?.phone) return false;
  const [{ number }] = config?.contactInfo?.phone;
  const str = number?.toString();
  return (
    <h3 className="self-center col-span-full mb-1 text-lg">
      <span>{str.substring(0, 3)}</span>
      <span className="text-red">.</span>
      <span>{str.substring(3, 6)}</span>
      <span className="text-red">.</span>
      <span>{str.substring(6)}</span>
    </h3>
  );
};

const Address = () => {
  const config = useSiteConfig();
  if (!config?.contactInfo?.address) return false;
  const { street, city, state, zip } = config.contactInfo.address;
  return (
    <div className="flex flex-col sm:flex-row row-span-2 sm:row-span-1 gap-2 sm:gap-0">
      <span className="sm:after:content-[','] sm:after:mr-[1ch]">{street}</span>
      <span>
        {city}, {state} {zip}
      </span>
    </div>
  );
};

const Email = () => {
  const config = useSiteConfig();
  if (!config?.contactInfo?.email) return false;
  return <span>{config.contactInfo.email}</span>;
};

const ContactInfo = ({ children }: { children: ReactNode }) => {
  const config = useSiteConfig();
  if (!config?.contactInfo) return false;
  const { phone, email, address } = config.contactInfo;
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-2 items-center">
      {children}
    </div>
  );
};
