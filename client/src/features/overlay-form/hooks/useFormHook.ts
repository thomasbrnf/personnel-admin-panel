import { useForm } from "@mantine/form";

export default function useFormHook<T>(initialData: T) {
  return useForm<T>({
    initialValues: {
      ...initialData,
    },
  });
}
