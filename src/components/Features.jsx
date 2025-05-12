import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { exploreVideo } from "../utils";
import { animateWithGsap } from "../utils/animations";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-zinc-50 relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-23 pl-24">
            <h2 className="text-5xl lg:7-xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:7-xl font-semibold">
              Forged in titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="explore_video"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
