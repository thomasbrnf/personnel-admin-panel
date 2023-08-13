import { MantineProvider } from "@mantine/core";
import { TablePersonnel } from "./features/table-personnel";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <TablePersonnel />
    </MantineProvider>
  );
}

export default App;
