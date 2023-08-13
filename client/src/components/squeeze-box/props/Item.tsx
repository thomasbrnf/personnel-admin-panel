import { Accordion } from "@mantine/core";

const style = {
  padding: "10px",
  paddingRight: "30px",
  paddingLeft: "30px",
};

export function Item({
  nameId,
  displayName,
  children,
}: {
  nameId: string;
  displayName: string;
  children: any;
}) {
  return (
    <Accordion.Item value={nameId} sx={style}>
      <Accordion.Control>{displayName}</Accordion.Control>
      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
}
