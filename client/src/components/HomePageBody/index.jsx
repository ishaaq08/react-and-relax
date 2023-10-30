import background from '../../assets/annie-spratt-ITE_nXIDQ_A-unsplash.jpg';

const index = () => {
  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path
    backgroundSize: 'cover', // Adjust to your preference
    backgroundPosition: 'center', // Adjust to your preference
    height: '100vh', // Set the desired height of your hero section
  };
  return (
    <div className="text-white font-semibold" style={bgStyles}>
      <div className="w-6/12 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-5xl">
          Experience a new era of AI-enhanced learning
        </h1>
        <p className="text-md">
          Quizlet is more than flashcards: it’s the #1 global learning platform.
          Join our community of 300 million learners using Quizlet’s practice
          tests, Expert Solutions and AI-powered tools to improve their grades
          and reach their goals.
        </p>
        <button className="bg-purple-800 py-2 px-4 rounded-lg w-3/12">
          Signup Now
        </button>
      </div>
    </div>
  );
};
export default index;
