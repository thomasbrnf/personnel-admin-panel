import { Box, Text, Divider } from "@mantine/core";

export function InputBox({ name, children }: { name: string; children: any }) {
  return (
    <Box my={20}>
      <Text fz="sm" fw={500}>
        {name}
      </Text>
      <Divider my={20} />
      {children}
      <Divider my={20} />
    </Box>
  );
}
