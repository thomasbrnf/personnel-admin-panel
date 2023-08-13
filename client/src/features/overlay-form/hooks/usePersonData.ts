import { useState } from "react";
import { PersonData } from "../../../types/types";
import { initialState } from "../services/CONSTANTS";

export function usePersonData() {
  return useState<PersonData>(initialState);
}
