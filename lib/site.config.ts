import { TSiteConfig } from "@crymson/web/SiteConfig";

// import Logo from "$logo/juty-logo.svg";
const $ = "";
export const config: TSiteConfig = {
  title: "JuTy",
  about: "The official website of JuTy Construction & Development",
  owner: "JuTy Construction & Development, LLC",
  favIcon: "./public/favicon.ico",
  nav: [
    // { "": "Home" },
    { services: ["construction", "renovation", "management"] },
    "gallery",
    { about: ["us", "jobs", "training"] },
    "contact",
  ],
  contactInfo: {
    phone: [{ number: 4705560252, type: "mobile" }],
    email: "jutydevelopment@gmail.com",
    address: {
      street: "1234 Alphabet Lane",
      city: "Atlanta",
      state: "GA",
      country: "USA",
      zip: "30080",
    },
  },
  socials: {
    twitter: "https://twitter.com/myprofile",
  },
  analytics: {
    googleTagManager: "GTM-XXXXXX",
    customScripts: ["./public/custom-analytics.js"],
  },
};
