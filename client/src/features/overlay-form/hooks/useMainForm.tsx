import { isNotEmpty, useForm } from "@mantine/form";
import { MainData } from "../../../types/types";

export default function useMainForm(initialData: MainData) {
  return useForm<MainData>({
    initialValues: {
      ...initialData,
    },
    validate: {
      name: isNotEmpty("Ця форма має бути заповненою"),
    },
  });
}
