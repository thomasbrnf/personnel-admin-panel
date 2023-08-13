export const handleDelete = async (id: number, close: () => void) => {
  await fetch(`/delete-person/${id}`);
  close();
};
