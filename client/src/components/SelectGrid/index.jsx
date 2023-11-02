import { delay, motion } from 'framer-motion';
import revision from '../../assets/childrevising2.jpg';
import { useState } from 'react';
import { Footer } from '..';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts';

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

  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path // Adjust to your preference
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Adjust to your preference
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the desired height of your hero section
  };

  const cardVariants = {
    expanded: {
      width: '50vw',
      height: '70vh',
    },
    collapsed: {
      width: '40vw',
      height: '70vh',
    },
  };

  const cardImages = [revision, revision];

  const cardDescription = [`Fill in the blanks`, `Psuedocode`];
  const links = [
    '/games/how-to-play/fill-in-the-blanks',
    '/games/how-to-play/fill-in-the-blanks',
  ];
  const gameNames = ['Fill in the blanks', 'PseudoCode'];

  return (
    <>
      <section className="py-16 h-screen" style={bgStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <h1 className="text-3xl font-extrabold">Select A Game</h1>
            <p className="mt-4 text-xl text-gray-300">Check our latest works</p>
          </div> */}
        </div>
        <div className="mt-12 h-full flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1].map((index) => {
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
                style={{ backgroundImage: `url(${cardImages[index]})` }}
              >
                <div className="card-content h-full flex flex-col justify-end">
                  <motion.div className="card-footer p-5 rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-semibold text-white text-center">
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
                          className="bg-[#48CAE4] py-4 px-8 mb-4 rounded-lg"
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
