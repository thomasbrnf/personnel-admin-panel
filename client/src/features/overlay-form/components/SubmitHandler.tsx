import { Button, Group } from "@mantine/core";
import { GroupButton } from "../../../layout";
import { ButtonConfirm } from "../../../components/confirm-action-overlay";

export function GlobalSubmit({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: any;
}) {
  return (
    <GroupButton>
      <Button radius="md" variant="default" type="submit" onClick={onSubmit}>
        Підтвердити
      </Button>
      <ButtonConfirm onConfirm={onClose} actionName="Скасувати" />
    </GroupButton>
  );
}

export function LocalSubmit({
  state,
  submitBtnRef,
  onAccept,
  onCancel,
}: {
  state: boolean;
  submitBtnRef: React.RefObject<HTMLButtonElement>;
  onAccept: () => void;
  onCancel: () => void;
}) {
  return (
    <Group grow>
      <Button
        ref={submitBtnRef}
        radius="md"
        variant="default"
        type="submit"
        onClick={onAccept}
      >
        Підтвердити
      </Button>
      <Button
        radius="md"
        variant="default"
        disabled={!state}
        onClick={onCancel}
      >
        Скасувати
      </Button>
    </Group>
  );
}
