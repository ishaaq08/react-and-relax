import bg from '../../assets/howtoplaybg.jpg';
import game from '../../assets/game1.png';
import { useData } from '../../contexts';

const index = () => {
  const { howTo, setHowTo } = useData();

  const bgStyles = {
    backgroundColor: `#023E8A`, // Use the 'url' function to specify the image path
    backgroundSize: 'cover', // Adjust to your preference
    backgroundPosition: 'center', // Adjust to your preference
    height: '93.5vh',
    width: '100vw',
    position: 'relative', // Required for overlay // Set the desired height of your hero section
  };

  // const overlayStyles = {
  //   content: '""',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   background: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.4) to control darkness
  // };

  return (
    <>
      <div
        style={bgStyles}
        className="flex overflow-hidden justify-center items-center"
      >
        <div className="flex flex-col justify-center w-[20%] items-center mb-12">
          <img className="w-4/12" src={game} alt={game} />
          <h4 className="text-2xl font-bold text-white mb-5">Ready to Play?</h4>
          <p className="text-white text-center w-10/12">
            {howTo === 1
              ? 'Play the computer science fill-in-the-blank game by filling in missing code or concepts in sentences to test and enhance your programming knowledge.'
              : 'In the computer science pseudocode game, practice your algorithmic thinking by completing pseudocode fragments to solve problems and develop your coding skills.'}
          </p>
          <button className="w-6/12 font-semibold text-white mt-5 bg-[#00B4D8] py-4 px-4 rounded-lg ">
            Start game
          </button>
        </div>
      </div>
    </>
  );
};
export default index;
