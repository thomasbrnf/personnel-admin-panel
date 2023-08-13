import { Box } from "@mantine/core";

export function InputForm({
  handleSubmit,
  children,
}: {
  handleSubmit: any;
  children: any;
}) {
  return (
    <Box mx={20} my={20}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          e.currentTarget.disabled = true;
        }}
      >
        {children}
      </form>
    </Box>
  );
}
