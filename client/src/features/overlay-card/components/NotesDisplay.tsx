import { Text } from "@mantine/core";
import { NotesData } from "../../../types/types";

export function NotesDisplay({ data }: { data: NotesData }) {
  return <Text>{data.notes}</Text>;
}
