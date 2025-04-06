import { TSiteConfig } from "@crymson/web/SiteConfig";

// import Logo from "$logo/juty-logo.svg";
const $ = "";
export const config: TSiteConfig = {
  title: "JuTy",
  about: "The official website of JuTy Construction & Development",
  owner: "JuTy Construction & Development, LLC",
  favIcon: "./public/favicon.ico",
  nav: [{ about: ["us", "company"] }, "listings", "gallery", "join", "contact"],
  contactInfo: {
    phone: [{ number: 4705560252, type: "mobile" }],
    email: "jutydevelopment@gmail.com",
    address: {
      street: "1234 Alphabet Lane",
      city: "Big City",
      state: "State",
      country: "USA",
      zip: "012345-6789",
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
