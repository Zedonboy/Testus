import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Option from "../component/Option";
import { useHistory } from "react-router-dom";

let slideVariant = {
  initial: {
    opacity: 0,
  },

  active: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
  },
};

const arr = [
  {
    question:
      "You’re really busy at work and a colleague is telling you their life story and personal woes. You:?",
    a: "Don’t dare to interrupt them",
    b: "Think it’s more important to give them some of your time; work can wait",
    c: "Listen, but with only with half an ear",
    d: "Interrupt and explain that you are really busy at the moment",
  },
  {
    question:
      "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
    a: "Look at your watch every two minutes",
    b: "Bubble with inner anger, but keep quiet",
    c: "Explain to other equally impatient people in the room that the doctor is always running late",
    d: "Complain in a loud voice, while tapping your foot impatiently",
  },

  {
    question:
      "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
    a: "Don’t dare contradict them",
    b: "Think that they are obviously right",
    c: "Defend your own point of view, tooth and nail",
    d: "Continuously interrupt your colleague",
  },
  {
    question: "You are taking part in a guided tour of a museum. You:",
    a: "Are a bit too far towards the back so don’t really hear what the guide is saying",
    b: "Follow the group without question",
    c: "Make sure that everyone is able to hear properly",
    d: "Are right up the front, adding your own comments in a loud voice",
  },
];
export default function Question() {
  let [question, setQuestion] = useState(0);
  let history = useHistory();
  return (
    <section className="h-screen overflow-hidden bg-black">
      <AnimatePresence>
        <motion.section
          key={question}
          initial="initial"
          animate="active"
          exit="exit"
          variants={slideVariant}
          className="h-screen flex flex-col justify-center items-center text-white"
        >
          <h1 className="text-2xl">{arr[question].question}</h1>
          <div className="w-1/2 p-8 flex flex-col">
            <div className="flex py-6 justify-between">
              <Option
                onClick={(e) => {
                  let nextQ = question + 1;
                  if (nextQ >= arr.length) {
                    history.push("/finish");
                  } else {
                    setQuestion(nextQ);
                  }
                }}
                label="A"
                option={arr[question].a}
              />
              <Option
                onClick={(e) => {
                  let nextQ = question + 1;
                  if (nextQ >= arr.length) {
                    history.push("/finish");
                  } else {
                    setQuestion(nextQ);
                  }
                }}
                label="B"
                option={arr[question].b}
              />
            </div>
            <div className="flex py-6 justify-between">
              <Option
                onClick={(e) => {
                  let nextQ = question + 1;
                  if (nextQ >= arr.length) {
                    history.push("/finish");
                  } else {
                    setQuestion(nextQ);
                  }
                }}
                label="C"
                option={arr[question].c}
              />
              <Option
                onClick={(e) => {
                  let nextQ = question + 1;
                  if (nextQ >= arr.length) {
                    history.push("/finish");
                  } else {
                    setQuestion(nextQ);
                  }
                }}
                label="D"
                option={arr[question].d}
              />
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </section>
  );
}
