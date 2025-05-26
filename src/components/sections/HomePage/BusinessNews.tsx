"use client";
import { CardNews } from "@/components/parts/CardNews";
import { getBusinessNews } from "@/config/api/getNews";
import { NewsArticle } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "antd";
import React from "react";

type NewsPost = {
  articles?: NewsArticle[];
};
const BusinessNews: React.FC = () => {
  const { data, isLoading, error } = useQuery<NewsPost>({
    queryKey: ["businessNews"],
    queryFn: getBusinessNews,
  });

  if (isLoading)
    return <Skeleton active paragraph={{ rows: 4 }} className="mt-10" />;
  if (error) return <p>Error fetching business news</p>;
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-8">
      <h1 className="text-4xl font-bold">Business News</h1>
      <p className="text-gray-600 text-[12px] mt-2">
        Stay informed with the latest business news and trends. Explore our
        curated selection of articles covering a wide range of topics, from
        market analysis to industry insights.
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

export default BusinessNews;
