import Copy from "@crymson/ui/common/Copy";
import List from "@crymson/ui/layout/List";
import Nav from "@crymson/web/elements/Nav";
import Footer from "@crymson/web/structure/Footer";
import Header from "@crymson/web/structure/Header";
import Page from "@crymson/web/structure/Page";
import Section from "@crymson/web/structure/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header>
        <List content={["Logo", "Nav"]} />
        <Nav />
      </Header>
      <Page title="Home">
        <Section title="Landing" hero>
          JuTy
        </Section>
        <Section title="Call to Action">Get A Quote</Section>
        <Section title="Gallery">Gallery</Section>
      </Page>
      <Footer className="bg-black text-white">
        <List content={["Full Logo", "Footer Nav", "Copyright"]} />
        <Copy />
      </Footer>
    </>
  );
}
