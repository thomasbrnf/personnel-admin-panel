import { PersonData } from "../../../types/types";
import { filterOutOnEmpty } from ".";

export const addPerson = async (personData: PersonData) => {
  const filteredData = filterOutOnEmpty(personData);

  const result = await fetch("/add-person", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filteredData),
  });
  const resultInJson = await result.json();
  console.log(resultInJson);
};

export const editPersonData = async (personData: PersonData) => {
  const filteredData = filterOutOnEmpty(personData);

  const result = await fetch(`/edit-person/${personData.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filteredData),
  });
  const resultInJson = await result.json();
  console.log(resultInJson);
};
