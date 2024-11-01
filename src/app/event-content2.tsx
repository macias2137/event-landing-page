"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

// import modi from "../../public/image/modi-photo-min.jpeg";
// import jeggels from "../../public/image/jeggels-photo-min.jpg";
// import dr_v from "../../public/image/vaishampayan-photo.jpg";
// Didier Lustig, LNHF, Paris, France
// "Actinides in Homeopathy - Threshold of death and the way to inner transformation".

const EVENT_CONTENT = [
  {
    title: "How to approach dead end pathologies like Coma - case presentation",
    // description: "",
    name: "Dr Mayuresh Mahajan MD, Homeopath",
    position: "Bombay, India",
    panel: "Presentation",
    // img: "/image/frass-photo.jpg",
  },
  {
    title: "Case presentation: Infective Endocarditis",
    description: "",
    name: "Dr Huang Wei Ling, MD",
    position: "Brazil",
    panel: "Presentation",
    // img: "/image/jeggels-photo-min.jpg",
  },
  {
    title:
      "Actinides in Homeopathy - Threshold of death and the way to inner transformation",
    description: "",
    name: "Didier Lustig, LNHF, Paris, France",
    position: "Paris, France",
    panel: "Presentation",
    // img: "/image/modi-photo-min.jpeg",
  },
  {
    title:
      "Homoeopathic Management in a Case of Subacute Brachial Artery Thrombosis",
    // description: ""
    name: "Yogesh Honrao, MD",
    position: "Nashik, India",
    panel: "Presentation",
    // img: "/image/vaishampayan-photo.jpg",
  },
];

export function EventContent2() {
  return (
    <section className="py-8 px-8 lg:py-20">
      {/* <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
           <TabsHeader className="h-12 w-72 md:w-96">
            // <Tab value="Day1" className="font-medium">
              // Day 1
            // </Tab>
            // <Tab value="Day2" className="font-medium">
              // Day 2
            // </Tab>
            // <Tab value="Day3" className="font-medium">
              // Day 3
            // </Tab>
          // </TabsHeader>
        </div>
      </Tabs> */}
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent2;
