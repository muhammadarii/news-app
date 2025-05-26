"use client";
import { CardNews } from "@/components/parts/CardNews";
import { getUpdateNews } from "@/config/api/getNews";
import { NewsArticle } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import React from "react";

type NewsPost = {
  articles?: NewsArticle[];
};

const UpdateNews: React.FC = () => {
  const { data, isLoading, error } = useQuery<NewsPost>({
    queryKey: ["updateNews"],
    queryFn: getUpdateNews,
  });

  if (isLoading)
    return <Skeleton active paragraph={{ rows: 4 }} className="mt-10" />;
  if (error) return <p>Error fetching news</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-8">
      <h1 className="text-4xl font-bold">Latest Updates</h1>
      <p className="text-gray-600 text-[12px] mt-2">
        Discover our most recent developments and initiatives in our Latest
        Updates. We keep you in the loop with the latest news
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data?.articles?.slice(0, 6).map((news, index) => (
          <CardNews
            key={index}
            title={news.title}
            urlToImage={news.urlToImage}
            description={news.description}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdateNews;
