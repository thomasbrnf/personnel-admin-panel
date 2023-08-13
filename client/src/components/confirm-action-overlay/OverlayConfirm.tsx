import { Button, Text } from "@mantine/core";
import { Overlay } from "../../layout";
import { GroupButton } from "../../layout";

export function OverlayConfirm({
  opened,
  close,
  onConfirm,
  actionName,
}: {
  opened: boolean;
  close: () => void;
  onConfirm: (...args: any[]) => any;
  actionName: string;
}) {
  function handleConfirm() {
    onConfirm();
    close();
  }
  return (
    <Overlay
      size="sm"
      opened={opened}
      onClose={close}
      withCloseButton={false}
      closeOnClickOutside={true}
    >
      <Text fz="xl" align="center" fw={700} sx={{ paddingTop: 20 }}>
        {actionName}?
      </Text>

      <GroupButton>
        <Button
          radius="md"
          variant="outline"
          color="red"
          onClick={handleConfirm}
        >
          Так
        </Button>
        <Button radius="md" variant="default" onClick={close}>
          Ні
        </Button>
      </GroupButton>
    </Overlay>
  );
}
