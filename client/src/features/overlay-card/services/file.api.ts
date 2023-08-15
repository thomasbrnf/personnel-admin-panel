export const retriveFile = async (id: number) => {
  const response = await fetch(`/generate-asc/${id}`);

  if (response.ok) {
    const blob = await response.blob();

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "Обліково-послужна карта.xlsx";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();

    URL.revokeObjectURL(downloadLink.href);
    document.body.removeChild(downloadLink);
  } else {
    console.error("Request failed with status:", response.status);
  }
};
