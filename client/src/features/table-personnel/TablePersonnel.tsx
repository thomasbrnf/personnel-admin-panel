import { useEffect, useState } from "react";
import { Table, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Row, TableBox } from "./components";
import { MainData, PersonData } from "../../types/types";
import { fetchPersonnel } from "./service";
import { fetchPersonData } from "../../services";
import { OpenAddForm } from "../overlay-form";
import { OverlayCard } from "../overlay-card";

export function TablePersonnel() {
  const [personnelData, setPersonnelData] = useState<MainData[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [personData, setPersonData] = useState<PersonData | undefined>();

  useEffect(() => {
    async function fetchAndSet() {
      const personnel = await fetchPersonnel();
      setPersonnelData(personnel);
    }
    fetchAndSet();
  }, [personnelData]);

  const handleRowDoubleClick = async (id: number) => {
    const data = await fetchPersonData(id);
    setPersonData(data);
    open();
  };
  return (
    <>
      <TableBox>
        <Table horizontalSpacing="lg" verticalSpacing="sm" highlightOnHover>
          <thead>
            <tr>
              <th>No з/п</th>
              <th>Прізвище, ім'я, по батькові</th>
            </tr>
          </thead>
          <tbody>
            {personnelData.map((personnel) => (
              <Row
                key={personnel.id}
                person={personnel}
                onDoubleClick={() => handleRowDoubleClick(personnel.id)}
              />
            ))}
          </tbody>
        </Table>
        <Group my={15} grow>
          <OpenAddForm />
        </Group>
      </TableBox>

      {personData && (
        <OverlayCard opened={opened} onClose={close} data={personData} />
      )}
    </>
  );
}
