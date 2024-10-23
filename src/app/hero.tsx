"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="lead" color="white" className="mb-2">
            26 October 2024, 4&nbsp;pm&ndash;6&nbsp;pm (UTC+2)
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            The Best of Sevilla 2024
          </Typography>
          <Typography
            variant="h2"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Highlights of the 77th LMHI World Homeopathic Congress (part 1)
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full"
          >
            Join us for the free webinar featuring world&apos;s leading
            homeopaths!
          </Typography>
          <div className="flex items-center gap-4">
            <a
              href="https://forms.gle/YH9ReYRYxMdCDdFFA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="gradient" color="white">
                Register now for free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
