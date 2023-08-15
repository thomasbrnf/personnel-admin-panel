import { Button } from "@mantine/core";
import { retriveFile } from "../services";

export function ButtonASP({ id }: { id: number }) {
  return (
    <Button radius="md" variant="default" onClick={() => retriveFile(id)}>
      Обліково-послужна карта
    </Button>
  );
}
