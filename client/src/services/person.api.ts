export async function fetchPersonData(id: number) {
  const result = await fetch(`/personnel/${id}`);
  return await result.json();
}

export async function deletePerson(id: number) {
  const result = await fetch(`/delete-person/${id}`);
  return await result.json();
}
