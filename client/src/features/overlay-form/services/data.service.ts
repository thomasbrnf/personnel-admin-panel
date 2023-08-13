import { PersonData, MainData } from "../../../types/types";

export function filterOutOnEmpty(data: PersonData) {
  return Object.fromEntries(
    Object.entries(data).filter(([key, v]) => {
      if (key === "id" && !isValidId(v)) {
        return false;
      }
      return !isEmpty(v);
    }),
  );
}

export function setMainData(personData: PersonData, formValues: MainData) {
  personData.id = formValues.id;
  personData.name = formValues.name;
  personData.enum = formValues.enum;
}

function isEmpty(value: string): boolean {
  return value === "";
}

function isValidId(id: number): boolean {
  return id > 0;
}
