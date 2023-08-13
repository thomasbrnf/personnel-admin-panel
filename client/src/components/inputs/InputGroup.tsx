import { Group } from "@mantine/core";

export function InputGroup({ children }: { children: any }) {
  return (
    <Group my={20} grow>
      {children}
    </Group>
  );
}
