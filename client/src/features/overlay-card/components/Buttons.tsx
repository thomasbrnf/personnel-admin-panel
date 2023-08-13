import { Button } from "@mantine/core";
import { ButtonConfirm } from "../../../components/confirm-action-overlay";
import { OpenEditForm } from "../../overlay-form";
import { GroupButton } from "../../../layout";
import { handleDelete } from "../services/person.api";

export function Buttons({ id, onClose }: { id: number; onClose: () => void }) {
  return (
    <GroupButton>
      <Button radius="md" variant="default">
        Обліково-послужна карта
      </Button>
      <OpenEditForm id={id} />
      <ButtonConfirm
        onConfirm={() => handleDelete(id, onClose)}
        actionName="Видалити"
      />
    </GroupButton>
  );
}
