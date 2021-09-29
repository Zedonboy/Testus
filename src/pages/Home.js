import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  const controls = useAnimation();
  const textControl = useAnimation();
  const mainControl = useAnimation();
  useEffect(() => {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    window.particlesJS.load("particles", "particles.json", function () {
      console.log("callback - particles.js config loaded");
    });

    controls
      .start({
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.7,
        },
      })
      .then((v) => {
        controls
          .start({
            x: 0,
            transition: {
              duration: 1,
            },
          })
          .then((v) => {
            textControl.start({
              opacity: 1,
              transition: {
                delay: 0.6,
                duration: 1,
              },
            });

            mainControl.start({
              opacity: 1,
              transition: {
                delay: 1,
                duration: 1,
              },
            });
          });
      });
  }, []);
  return (
    <section id="particles" className="h-screen relative bg-black">
      <div className="absolute space-y-6 top-0 bottom-0 left-0 flex flex-col justify-center items-center right-0">
        <div className="flex h-24 items-center">
          <motion.img
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={controls}
            className="h-24 w-24"
            src="/images/psychology.png"
            alt="logo"
          />
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={textControl}
            className="text-green-400 font-bold text-7xl"
          >
            Testus
          </motion.h1>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={mainControl}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-white text-2xl">
            Let check if you are an Introvert of Extrovert
          </h1>
          <button
            onClick={(e) => {
                history.push("/questions")
            }}
            className="border-4 font-bold text-white p-2 hover:border-blue-400 hover:text-blue-400 border-white"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
