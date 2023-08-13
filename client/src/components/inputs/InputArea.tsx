import { Textarea } from "@mantine/core";

export function InputArea({
  name,
  disabled,
  ...prop
}: {
  name: string;
  disabled: boolean;
}) {
  return (
    <Textarea
      my={20}
      disabled={disabled}
      label={name}
      autosize
      minRows={3}
      maxRows={6}
      {...prop}
    />
  );
}
