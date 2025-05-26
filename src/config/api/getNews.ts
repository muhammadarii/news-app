export const getUpdateNews = async () => {
  try {
    const response = await fetch("/api/updateNews");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching update news:", error);
    return [];
  }
};

export const getBusinessNews = async () => {
  try {
    const response = await fetch("/api/businessNews");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching update news:", error);
    return [];
  }
};
