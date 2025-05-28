"use client";

import { getUpdateNews } from "@/config/api/getNews";
import { NewsArticle } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SearchPopup } from "./SearchPopUP";
import { SkeletonLoadingInput } from "../Skeleton";

interface SearchBarProps {
  className?: string;
}

type NewsPost = {
  articles?: NewsArticle[];
};

export const SearchBar = ({ className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NewsArticle[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const { isLoading, error } = useQuery<NewsPost>({
    queryKey: ["updateNews"],
    queryFn: getUpdateNews,
  });

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const data = await getUpdateNews();
      setResults(data.articles || []);
      setShowPopup(true);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  if (isLoading) return <SkeletonLoadingInput className="mt-8" />;
  if (error)
    return <p className="text-center text-red-500">Error fetching news</p>;

  return (
    <div className="flex items-center justify-center relative">
      <div className={`mt-10 lg:w-[500px] ${className}`}>
        <input
          className="border-2 border-black rounded-full px-4 py-2 w-full"
          placeholder="Search News"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {showPopup && (
        <SearchPopup results={results} onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
};
