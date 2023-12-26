const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold w-1/4">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-10 rounded-lg text-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-5 mx-2 bg-opacity-50 rounded-lg text-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
