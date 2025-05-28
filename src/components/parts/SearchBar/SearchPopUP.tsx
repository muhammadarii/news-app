import { NewsArticle } from "@/types";

export const SearchPopup = ({
  results,
  onClose,
}: {
  results: NewsArticle[];
  onClose: () => void;
}) => (
  <div className="absolute top-[80px] w-[500px] max-h-[400px] overflow-y-auto bg-white border shadow-lg rounded-md p-4 z-50">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">Search Results</h2>
      <button
        onClick={onClose}
        className="bg-[#D8FF99] w-8 h-8 rounded-full text-black font-bold"
      >
        ✕
      </button>
    </div>
    {results.length > 0 ? (
      <ul className="space-y-3">
        {results.map((article, idx) => (
          <div key={idx} className="flex flex-row items-center gap-2">
            <img
              src={article.urlToImage}
              alt="image"
              className="w-20 h-20 object-cover rounded-md"
            />
            <li className="border-b">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-600">{article?.source?.name}</p>
            </li>
          </div>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No results found.</p>
    )}
  </div>
);
