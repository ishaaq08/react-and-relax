import { motion } from 'framer-motion';

import { useState } from 'react';
import { Footer } from '..';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts';
import Lottie from 'lottie-react';
import animation1 from '../../assets/animation1.json';
import animation2 from '../../assets/animation2.json';
import animation3 from '../../assets/animation3.json';

import background from '../../assets/background.svg';
const index = () => {
  const { howTo, setHowTo } = useData();
  const handleGame = (index) => {
    setHowTo(index);
  };
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const data = [
    { id: 1, animationData: animation1 },
    { id: 2, animationData: animation3 },
  ];

  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path // Adjust to your preference
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Adjust to your preference
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the desired height of your hero section
  };

  const cardVariants = {
    expanded: {
      width: '30vw',
      height: '60vh',
    },
    collapsed: {
      width: '20vw',
      height: '60vh',
    },
  };

  const links = [
    '/games/how-to-play/fill-in-the-blanks',
    '/games/how-to-play/fill-in-the-blanks',
  ];

  const gameNames = ['Fill in the blanks', 'PseudoCode'];

  return (
    <>
      <section className="py-16 h-screen" style={bgStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="mt-12 h-full flex flex-col md:flex-row justify-center items-center gap-5">
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-3xl ${
                  index === expandedIndex ? 'expanded' : ''
                }`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-content border-blue-500 rounded-2xl h-full flex w-full flex-col justify-end backdrop-blur-lg shadow-lg bg-opacity-20">
                  <AnimatedComponent animationData={item.animationData} />
                  <motion.div className="card-footer p-5 rounded-b-[20px] bg-gray-900 bg-opacity-30 min-h-[100px] flex flex-col items-center justify-center">
                    <h2 className="text-3xl  w-full font-semibold text-white text-center">
                      {gameNames[index]}
                    </h2>
                    {index === expandedIndex && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 mb-4"
                      >
                        <Link
                          onClick={() => handleGame(index + 1)}
                          className="bg-[#48CAE4] font-semibold tracking-wide py-4 px-8 mb-4 rounded-lg"
                          to={links[index]}
                        >
                          Play Game
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default index;

const AnimatedComponent = ({ animationData }) => {
  return (
    <div className="w-9/12 ml-16 mb-14">
      <Lottie animationData={animationData} />
    </div>
  );
};
