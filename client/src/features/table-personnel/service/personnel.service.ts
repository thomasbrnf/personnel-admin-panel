import { getPersonnelData, fetchPersonnelData } from "../../../services";

export async function fetchPersonnel() {
  const personnelData = await fetchPersonnelData();
  return getPersonnelData(personnelData);
}
