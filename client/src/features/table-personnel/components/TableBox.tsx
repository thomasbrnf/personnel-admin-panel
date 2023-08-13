import { Box } from "@mantine/core";

export function TableBox({ children }: { children: any }) {
  return (
    <Box
      sx={{
        width: 450,
        padding: 50,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
      }}
    >
      {children}
    </Box>
  );
}
