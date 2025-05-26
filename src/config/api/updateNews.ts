export const getUpdateNews = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2025-04-26&sortBy=publishedAt&apiKey=69e953354c9d4b468da4a23b1a9743a6",
      {
        method: "GET",
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching update news:", error);
    return [];
  }
};
