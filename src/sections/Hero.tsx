import Parallax from "parallax-js";
import React, {  } from "react";
import { Social, Subtitle } from "../components";

function Hero() {
  const parallaxRef = React.useRef(null);
  const [parallax, setParallax] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [showSocial, setShowSocial] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  React.useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }
    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  setTimeout(() => {
    setShowSocial(true)
  }, 100);

  return (
    <section id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div className="max-w-lg mx-auto" data-depth="0.4">
            <img src="/images/yo.jpg" alt="Facundo Cachan" srcSet="/images/yo.jpg"/>
             {/*<GatsbyImage {...data.photo.childImageSharp} />*/}
          </div>
        </div>
        <div className="col-span-3">
          <img src="/images/logo.png" alt="Facundo Cachan" srcSet="/images/logo.png"/>
          {/*
          <GatsbyImage
            className="max-w-lg max-h-32 mx-auto lg:mx-0"
            {...data.logo.childImageSharp}
          />
          */}
          <h1 className="sr-only">
            Facundo Cachan, desarrollo de software
            <br />
            Desarrollador y dise&ntilde;ador ...
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle onDone={() => setShowSocial(true)} />
            <div className="w-full md:w-auto h-6 my-6">
              {showSocial && <Social />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
