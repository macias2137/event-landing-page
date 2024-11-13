"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/plants.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h4" color="white" className="lg:max-w-3xl">
            We kindly invite you to HHF&apos;s upcoming webinar
          </Typography>
          <Typography
            variant="h3"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            <b>BRAMHASTRA</b>
            <p>
              Understanding Mind-Body-Soul with Psychodynamic and German New
              Medicine
            </p>
          </Typography>

          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdgESIDweiJ3BgcUFewMps5KU2P6jFm1pkPciJYNIxf34VrJw/viewform"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="gradient" color="white">
                Register now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
