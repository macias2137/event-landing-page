"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

// import modi from "../../public/image/modi-photo-min.jpeg";
// import jeggels from "../../public/image/jeggels-photo-min.jpg";
// import dr_v from "../../public/image/vaishampayan-photo.jpg";

const EVENT_CONTENT = [
  {
    title:
      "Additive homeopathy in Non Small Cell Lung Carcinoma patients: a valid paper",
    description: "",
    name: "Dr Michael Frass, MD",
    position:
      "Professor of Medicine Retired, Medical University of Vienna, Austria",
    panel: "Presentation",
    img: "/image/frass-photo.jpg",
  },
  {
    title: "Case presentation: Infective Endocarditis",
    description: "",
    name: "Dr Herman Jeggels, MD (VU Ams), MRCP (UK), FBIH (Hon), DHM (Hon)",
    position: "Private Practice, Kuils River, South Africa",
    panel: "Presentation",
    img: "/image/jeggels-photo-min.jpg",
  },
  {
    title: "Organon and Nowadays Medicine",
    description: "",
    name: "Dr Sanjay Modi, MD",
    position: "SMT.C.M.P. Homoeopathic Medical College, Mumbai",
    panel: "Presentation",
    img: "/image/modi-photo-min.jpeg",
  },
  {
    title:
      "Fungi's Secret: Exploring the Healing Power of a Unique Homeopathic Remedy",

    description: "",
    name: "Dr Shailendra Vaishampayan, MD",
    position:
      "Homeopathic Practitioner, educator, author, researcher, documentary filmmaker, podcaster",
    panel: "Presentation",
    img: "/image/vaishampayan-photo.jpg",
  },
];

export function EventContent() {
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

export default EventContent;
