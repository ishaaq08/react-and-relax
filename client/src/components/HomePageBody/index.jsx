import { Link } from 'react-router-dom';
import background from '../../assets/annie-spratt-ITE_nXIDQ_A-unsplash.jpg';
import revision1 from '../../assets/childrevising.jpg';
import revision2 from '../../assets/childrevising2.jpg';
import revision3 from '../../assets/childrevising3.jpg';
import revision4 from '../../assets/revision4.jpg';
import { Button1 } from '../Interface';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Reveal } from '../Reveal';

const index = () => {
  const refContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-430%']);

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
        className="text-white font-semibold flex justify-start items-center"
        style={bgStyles}
      >
        <div className="w-3/12 flex ml-32 flex-col gap-3 items-center justify-center ">
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
            <button className="w-6/12 bg-[#00B4D8] py-4 px-4 rounded-lg ">
              <Link to="/signup">Signup Now</Link>
            </button>
          </Reveal>
        </div>
      </div>
      {/* Features */}
      <div ref={refContainer} className="relative  w-screen mx-auto ">
        <Reveal width="fit-content">
          <h2 className="font-semibold text-5xl pt-10 tracking-tight w-screen  py-5 text-center text-black my-16">
            Ace your classes with our new suite of study tools
          </h2>
        </Reveal>

        <div className="grid max-w-[1500px] gap-28 place-items-center mx-auto mb-auto top-0  flex-row  w-full items-start ">
          {/* Flex Item  */}{' '}
          <div className="flex flex-shrink-0 flex-row-reverse gap-4 ">
            <div className="ml-7">
              <Reveal>
                <h4 className="font-extrabold py-2 text-5xl mb-2">
                  Fill in the Blanks
                </h4>
                <Reveal>
                  <p className="text-md my-5 tracking-tight">
                    Get ready for a fun, educational challenge with our
                    Fill-in-the-Blanks Revision Game! Complete sentences, boost
                    your knowledge, and have a blast. Suitable for all ages with
                    various difficulty levels. Ready to fill in the blanks?
                  </p>
                </Reveal>
                <Reveal>
                  <button className="w-6/12 font-semibold text-white mt-5 bg-[#00B4D8] py-4 px-4 rounded-lg ">
                    <Link to="/how-to-play/fill-in-the-blanks">Play Now</Link>
                  </button>
                </Reveal>
              </Reveal>
            </div>
            <Reveal>
              <img
                className="object-cover  mx-auto  rounded-xl"
                src={revision3}
                alt="revision"
              />
            </Reveal>
          </div>
          {/* Flex Item  */}{' '}
          <div className="flex   flex-shrink-0 gap-4 ">
            <div className="mr-7 ">
              <Reveal>
                <h4 className="font-extrabold py-2 text-5xl mb-2">
                  Create Magic Notes
                </h4>
                <Reveal>
                  <p className="text-md my-5 tracking-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, autem.
                  </p>
                </Reveal>
                <Reveal>
                  <button className="w-6/12 font-semibold text-white mt-5 bg-[#00B4D8] py-4 px-4 rounded-lg ">
                    <Link to="/signup">Signup Now</Link>
                  </button>
                </Reveal>
              </Reveal>
            </div>
            <Reveal>
              <img
                className="object-cover  mx-auto rounded-xl"
                src={revision1}
                alt="revision"
              />
            </Reveal>
          </div>
          {/* Flex Item  */}
          <div className="flex   mb-5 flex-shrink-0 flex-row-reverse gap-4 ">
            <div className="mr-7 ">
              <Reveal>
                <h4 className="font-extrabold py-2 text-5xl mb-2">
                  Create Magic Notes
                </h4>
                <Reveal>
                  <p className="text-md my-5 tracking-tight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, autem.
                  </p>
                </Reveal>
                <Reveal>
                  <button className="w-6/12 font-semibold text-white mt-5 bg-[#00B4D8] py-4 px-4 rounded-lg ">
                    <Link to="/signup">Signup Now</Link>
                  </button>
                </Reveal>
              </Reveal>
            </div>
            <Reveal>
              <img
                className="object-cover mx-auto   rounded-xl"
                src={revision4}
                alt="revision"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
