// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import EventContent2 from "./event-content2";
import Invitation from "./invitation";

import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SponsoredBy /> */}
      {/* <AboutEvent /> */}
      {/* <OurStats /> */}
      <Invitation />
      <EventContent2 />
      <EventContent />

      {/* <EventContent /> */}
      {/* <Faq /> */}
      <Footer />
    </>
  );
}
