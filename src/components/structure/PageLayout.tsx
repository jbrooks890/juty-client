"use client";
import { ReactNode } from "react";
import SiteConfig, { useSiteConfig } from "@crymson/web/SiteConfig";
import Footer from "@crymson/web/structure/Footer";
import Header from "@crymson/web/structure/Header";
import {
  DarkModeIcon,
  LocationIcon,
  PhoneIcon,
  PaperPlaneIcon,
} from "@crymson/svg/icons";
import Logo from "$logo/juty-logo.svg";
import Nav from "@crymson/web/elements/Nav";
import Button from "@crymson/ui/layout/Button";
// import List from "@crymson/ui/layout/List";
import Page from "@crymson/web/structure/Page";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = useSiteConfig();
  return (
    <Page>
      <Header
        // overlay
        className="z-[1000] flex h-16 items-center gap-x-4 bg-black px-8 py-2 text-white"
      >
        <Logo className="mr-auto h-8 fill-current" />
        <Nav
          className="flex gap-x-4"
          linkStyle={({ isHot, isActive }) =>
            `border-b duration-100 ease-out ${isActive ? "cursor-default" : ""} ${isHot ? "border-red" : "border-transparent hover:border-red"}`
          }
        >
          <Button className="grid h-4 place-content-center self-center">
            <DarkModeIcon className="h-4 fill-current" />
          </Button>
        </Nav>
      </Header>
      {children}
      <Footer className="bg-black p-8 text-white">
        <div className="max-w-256 mx-auto grid w-full grid-cols-2 gap-4 gap-x-8">
          <div className="flex flex-col items-start gap-1">
            <Logo className="h-12 fill-current" />
            <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-1 place-self-start text-sm">
              {/* <PhoneIcon className="h-4 fill-current aspect-square" /> */}
              <PhoneNum />
              <PaperPlaneIcon className="aspect-square h-4 fill-current" />
              <Email />
              <LocationIcon className="aspect-square h-4 fill-current" />
              <Address />
            </div>
          </div>
          <Footer.Nav
            tree={[
              ...config?.nav,
              {
                legal: {
                  terms: "Terms of Use",
                  privacy: "Privacy Policy",
                  cookies: "Cookie Policy",
                },
              },
            ]}
            className="flex gap-8 justify-self-end text-right text-sm"
            // headerCss="drop-shadow-[0px_1px_0px_red]"
          />
          <Footer.Copy className="border-current/10 col-span-full border-t pt-4 text-center text-xs" />
        </div>
      </Footer>
    </Page>
  );
}

const PhoneNum = () => {
  const config = useSiteConfig();
  if (!config?.contactInfo?.phone) return false;
  const [{ number }] = config?.contactInfo?.phone;
  const str = number?.toString();
  return (
    <h3 className="col-span-full mb-1 self-center text-lg">
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
    <div className="row-span-2 flex flex-col gap-2 sm:row-span-1 sm:flex-row sm:gap-0">
      <span className="sm:after:mr-[1ch] sm:after:content-[',']">{street}</span>
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
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2">
      {children}
    </div>
  );
};
