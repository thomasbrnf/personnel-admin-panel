import { TextInput } from "@mantine/core";

export function InputSpaced({
  name,
  disabled,
  ...prop
}: {
  name: string;
  disabled: boolean;
}) {
  return <TextInput disabled={disabled} my={20} label={name} {...prop} />;
}
