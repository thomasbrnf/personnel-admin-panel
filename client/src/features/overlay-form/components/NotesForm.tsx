import { InputForm, InputArea } from "../../../components/inputs";
import { useFormHook, useSubmit } from "../hooks";
import { NotesData } from "../../../types/types";
import { LocalSubmit } from ".";

export function NotesForm({
  onSubmit,
  initialData,
}: {
  onSubmit: any;
  initialData: NotesData;
}) {
  const { state, submitBtnRef, handleAccept, handleCancel } = useSubmit();
  const form = useFormHook<NotesData>(initialData);

  return (
    <InputForm
      handleSubmit={form.onSubmit((values) => {
        onSubmit(values);
        submitBtnRef.current!.disabled = true;
      })}
    >
      <InputArea disabled={state} name="" {...form.getInputProps("notes")} />

      <LocalSubmit
        submitBtnRef={submitBtnRef}
        state={state}
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    </InputForm>
  );
}
