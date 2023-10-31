import bg from '../../assets/howtoplaybg.jpg';
const index = () => {
  const bgStyles = {
    backgroundImage: `url(${bg})`, // Use the 'url' function to specify the image path
    backgroundSize: 'cover', // Adjust to your preference
    backgroundPosition: 'center', // Adjust to your preference
    height: '50vh',
    position: 'relative', // Required for overlay // Set the desired height of your hero section
  };

  const overlayStyles = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.4) to control darkness
  };

  return (
    <>
      <div>
        <h1 className="text-5xl uppercase tracking-widest font-semibold text-center mt-6">
          How To Play
        </h1>
      </div>
      <div style={bgStyles} className="w-11/12 mx-auto rounded-full mt-6">
        <div
          className="flex justify-center items-center rounded-full"
          style={overlayStyles}
        >
          <p className="text-white w-6/12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia iure
            porro officia qui tenetur repudiandae ullam ipsa aut eum non velit,
            consequatur, minus voluptate quae! Eveniet eaque numquam delectus,
            odit excepturi debitis dolore ducimus accusantium ab, aliquam
            accusamus labore ea exercitationem maiores eum similique repellendus
            explicabo iusto ullam hic. Quos!
          </p>
        </div>
      </div>
      <h2 className="text-5xl uppercase tracking-widest font-semibold text-center mt-6">
        Timer Settings
      </h2>
    </>
  );
};
export default index;
