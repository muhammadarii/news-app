import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

type NewsArticle = {
  title?: string;
  urlToImage?: string;
  description?: string;
  url?: string;
};

export const CardNews: React.FC<NewsArticle> = ({
  title,
  urlToImage,
  description,
  url,
}) => {
  return (
    <div className="relative w-[400px] h-[600px] shadow-2xl rounded-lg">
      <div className="my-2 w-[400px] p-4">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title ?? "News image"}
            width={400}
            height={250}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-sm text-gray-600">No Image</span>
          </div>
        )}
        <h1 className="text-lg font-semibold truncate">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <Link href={url ?? "#"}>
        <button className="absolute bottom-4 left-4 py-2 px-3 text-black flex flex-row gap-2 items-center bg-[#D8FF99] rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          Join the Movement
          <div className="bg-gray-500 p-1 rounded-full">
            <MdArrowOutward />
          </div>
        </button>
      </Link>
    </div>
  );
};
