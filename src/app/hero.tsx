"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h2" color="white" className="lg:max-w-3xl">
            The Best of Sevilla 2024
          </Typography>
          <Typography
            variant="h4"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Highlights of the 77th LMHI World Homeopathic Congress
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full"
          >
            <b>11 November 2024, 4&nbsp;pm&ndash;6&nbsp;pm (UTC+1)</b>
            <br />
            Watch part 1 of our webinar on YT. Part 2 coming soon.
          </Typography>
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/watch?v=-ZyLCmOwQY8"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="gradient" color="white">
                Check it out
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
