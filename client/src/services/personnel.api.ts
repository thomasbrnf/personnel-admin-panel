export const fetchPersonnelData = async () => {
  try {
    const response = await fetch(`/personnel`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
