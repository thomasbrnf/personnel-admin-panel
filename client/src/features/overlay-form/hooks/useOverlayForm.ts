import { PersonData } from "../../../types/types";

export function useOverlayForm(
  setPersonData: React.Dispatch<React.SetStateAction<PersonData>>,
) {
  function setData(data: any) {
    setPersonData((prev) => ({
      ...prev,
      ...data,
    }));
  }

  return {
    setData,
  };
}
