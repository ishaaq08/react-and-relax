import { Link } from 'react-router-dom';
import background from '../../assets/annie-spratt-ITE_nXIDQ_A-unsplash.jpg';
import revision1 from '../../assets/childrevising.jpg';
import revision2 from '../../assets/childrevising2.jpg';
import revision3 from '../../assets/childrevising3.jpg';
import revision4 from '../../assets/revision4.jpg';
import { Button1 } from '../Interface';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from '../Reveal';

const index = () => {
  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-405%']);

  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path
    backgroundSize: 'cover', // Adjust to your preference
    backgroundPosition: 'center', // Adjust to your preference
    height: '100vh', // Set the desired height of your hero section
  };
  return (
    // Hero Section
    <>
      <div
        className="text-white font-semibold flex justify-content items-center"
        style={bgStyles}
      >
        <div className="w-6/12 h-full flex flex-col gap-3 items-center justify-center ml-6">
          <Reveal>
            <h1 className="text-5xl mr-auto">
              Experience a new era of AI-enhanced learning
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-md">
              Quizlet is more than flashcards: it’s the #1 global learning
              platform. Join our community of 300 million learners using
              Quizlet’s practice tests, Expert Solutions and AI-powered tools to
              improve their grades and reach their goals.
            </p>
          </Reveal>
          <Reveal>
            <button className="w-full bg-[#00B4D8] py-4 px-4 rounded-lg ">
              <Link to="/signup">Signup Now</Link>
            </button>
          </Reveal>
        </div>
      </div>
      {/* Features */}
      <div ref={refContainer} className="relative h-[300vh] w-screen">
        <Reveal>
          {/* <h2 className="font-semibold text-5xl pt-10 tracking-tight text-white py-5 text-center ">
            Features
          </h2> */}
        </Reveal>

        <div className="sticky inset-0 flex gap-7 h-screen items-center overflow-hidden ">
          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover  rounded-xl"
                src={revision1}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>

          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover   rounded-xl"
                src={revision4}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>

          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover  rounded-xl"
                src={revision3}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>
          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover  rounded-xl"
                src={revision1}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>
          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover   rounded-xl"
                src={revision4}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>
          <motion.div
            style={{ x }}
            className="flex w-5/12 flex-shrink-0 flex-col gap-4 "
          >
            <Reveal>
              <img
                className="object-cover  rounded-xl"
                src={revision3}
                alt="revision"
              />
            </Reveal>
            <Reveal>
              <h4 className="font-semibold py-2 text-xl">Create Magic Notes</h4>
            </Reveal>
            <Reveal>
              <p className="text-md tracking-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, autem.
              </p>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default index;
