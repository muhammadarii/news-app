import { MdArrowOutward } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[600px] md:h-[500px] rounded-2xl border-[#D8FF99] border-[0.5px] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row items-center justify-center gap-10">
          <h1 className="text-[30px] md:text-[40px] font-semibold text-center md:text-start">
            <span className="bg-[#D8FF99] p-2 rounded-t-2xl">Latest</span>
            <br />
            <span className="bg-[#D8FF99] p-2 rounded-2xl md:rounded-bl-2xl md:rounded-r-2xl ">
              Updates and News
            </span>
          </h1>
          <div className="flex flex-col px-10 md:px-0">
            <p className="md:w-[600px]">
              Explore heartwarming stories, trending topics, and breaking news
              from around the world. Stay informed with the latest updates in
              technology, health, entertainment, and more. Dive into in-depth
              articles, discover inspiring human interest pieces, and never miss
              a moment with our real-time news coverage tailored just for you.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
              <button className="py-2 px-3 text-white flex flex-row gap-2 items-center bg-black rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                Join the Movement
                <div className="bg-gray-500 p-1 rounded-full">
                  <MdArrowOutward />
                </div>
              </button>
              <button className="py-2 px-3 text-black flex flex-row gap-2 items-center bg-gray-200 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                Support Our Case
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
