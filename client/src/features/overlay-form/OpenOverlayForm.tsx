import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { SortedData } from "../../types/types";
import { fetchPersonData, getSortedData } from "../../services";
import { initialPersonData } from "./services";
import { OverlayForm } from ".";

export function OpenAddForm() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button radius="md" color="dark" onClick={open}>
        Додати особу
      </Button>
      <OverlayForm data={initialPersonData} opened={opened} close={close} />
    </>
  );
}

export function OpenEditForm({ id }: { id: number }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [sortedData, setSortedData] = useState<SortedData>();

  useEffect(() => {
    if (sortedData) {
      open();
    }
  }, [sortedData]);

  const fetchAndSet = async () => {
    const result = await fetchPersonData(id);

    const data = getSortedData(result);
    setSortedData(data);
  };

  return (
    <>
      <Button variant="default" onClick={fetchAndSet}>
        Редагувати інформацію
      </Button>
      {sortedData && (
        <OverlayForm data={sortedData} opened={opened} close={close} />
      )}
    </>
  );
}
