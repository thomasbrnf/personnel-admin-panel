import { ButtonConfirm } from "../../../components/confirm-action-overlay";
import { OpenEditForm } from "../../overlay-form";
import { GroupButton } from "../../../layout";
import { handleDelete } from "../services";
import { ButtonASP } from ".";

export function Buttons({ id, onClose }: { id: number; onClose: () => void }) {
  return (
    <GroupButton>
      <ButtonASP id={id} />
      <OpenEditForm id={id} />
      <ButtonConfirm
        onConfirm={() => handleDelete(id, onClose)}
        actionName="Видалити"
      />
    </GroupButton>
  );
}
