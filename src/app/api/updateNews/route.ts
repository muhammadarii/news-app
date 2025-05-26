import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2025-04-26&sortBy=publishedAt&apiKey=69e953354c9d4b468da4a23b1a9743a6",
      {
        method: "GET",
      }
    );
    return NextResponse.json(await response.json());
  } catch (error) {
    console.error("Error fetching update news:", error);
    return NextResponse.json(
      { error: "Failed to fetch update news" },
      { status: 500 }
    );
  }
};
