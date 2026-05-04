// API service functions and business logic
// Add your service functions here

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: unknown) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to post");
    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
