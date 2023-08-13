import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { OverlayConfirm } from ".";

export function ButtonConfirm({
  onConfirm,
  actionName,
}: {
  onConfirm: (...args: any[]) => any;
  actionName: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button radius="md" variant="outline" color="red" onClick={open}>
        {actionName}
      </Button>
      <OverlayConfirm
        opened={opened}
        close={close}
        onConfirm={onConfirm}
        actionName={actionName}
      />
    </>
  );
}
