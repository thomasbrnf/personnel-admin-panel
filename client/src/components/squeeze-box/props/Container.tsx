import { Accordion } from "@mantine/core";
import { Item } from ".";

type squeezeBoxItemType = {
  nameId: string;
  displayName: string;
  children: React.ReactNode;
};

export function SqueezeBoxContainer({
  squeezeBoxItems,
}: {
  squeezeBoxItems: squeezeBoxItemType[];
}) {
  return (
    <Accordion
      radius="md"
      variant="contained"
      sx={{ padding: "25px", paddingBottom: 15, paddingTop: 15 }}
    >
      {squeezeBoxItems.map((item) => (
        <Item key={item.nameId} {...item} />
      ))}
    </Accordion>
  );
}
