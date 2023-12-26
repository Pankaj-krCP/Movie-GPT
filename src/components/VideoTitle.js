const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 w-[42%]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-4 text-lg">{overview}</p>
      <div>
        <button className="bg-gray-700 bg-opacity-60 text-white py-2 px-10 rounded-lg text-lg">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-60 text-white py-2 px-5 m-2 rounded-lg text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
