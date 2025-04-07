"use client";
import Page, { usePage } from "@crymson/web/structure/Page";
import Section from "@crymson/web/structure/Section";
import List from "@crymson/ui/layout/List";
import { useEffect } from "react";
const { Main } = Page;

type Props = {};
export default function HomePage({}: Props) {
  const { setStructure } = usePage();
  useEffect(() => {
    setStructure({ title: "Home" });
  }, []);
  return (
    <Main className="*:grow">
      <Section title="Landing" className="bg-gray-100 pt-16">
        JuTy
      </Section>
      <Section title="For Sale" className="bg-gray-200">
        <h2>2056 Gober Ave</h2>
        <List
          bullet="–"
          content={"Move-In Ready/1200 sqft./3 bed, 2.5 bath/2 Car Garage".split(
            "/",
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
    </Main>
  );
}
