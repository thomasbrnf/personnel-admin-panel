import { Button } from "@mantine/core";

export function GroupButton({ children }: { children: any }) {
  return (
    <Button.Group
      orientation="vertical"
      sx={{ padding: "25px", paddingBottom: 25 }}
    >
      {children}
    </Button.Group>
  );
}
