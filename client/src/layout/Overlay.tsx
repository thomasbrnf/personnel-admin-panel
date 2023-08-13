import { Modal } from "@mantine/core";

export function Overlay({
  size,
  opened,
  onClose,
  withCloseButton,
  closeOnClickOutside,
  children,
}: {
  size: string;
  opened: boolean;
  withCloseButton: boolean;
  closeOnClickOutside: boolean;
  onClose(): void;
  children: any;
}) {
  return (
    <Modal
      radius="md"
      size={size}
      opened={opened}
      onClose={onClose}
      withCloseButton={withCloseButton}
      closeOnClickOutside={closeOnClickOutside}
      overlayProps={{
        blur: 5,
      }}
      centered
    >
      {children}
    </Modal>
  );
}
