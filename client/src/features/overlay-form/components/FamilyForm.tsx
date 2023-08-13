import { InputForm, InputArea } from "../../../components/inputs";
import { useFormHook, useSubmit } from "../hooks";
import { FamilyData } from "../../../types/types";
import { LocalSubmit } from ".";

export function FamilyForm({
  onSubmit,
  initialData,
}: {
  onSubmit: any;
  initialData: FamilyData;
}) {
  const { state, submitBtnRef, handleAccept, handleCancel } = useSubmit();
  const form = useFormHook<FamilyData>(initialData);

  return (
    <InputForm
      handleSubmit={form.onSubmit((values) => {
        onSubmit(values);
        submitBtnRef.current!.disabled = true;
      })}
    >
      <InputArea
        disabled={state}
        name="Сімейний стан (одружений/заміжня/розлучена/ий з якого року)"
        {...form.getInputProps("marital_status")}
      />
      <InputArea
        disabled={state}
        name="ПІБ дружини (чоловіка), дата народження, ким і де працює, місце проживання, номер телефону"
        {...form.getInputProps("first_middle_last_name_wife_husband")}
      />
      <InputArea
        disabled={state}
        name="ПІБ дитини, дата народження, де навчається, місце"
        {...form.getInputProps("first_middle_last_name_childern")}
      />
      <InputArea
        disabled={state}
        name="ПІБ батька, дата народження (смерті, причина), ким і де працює, місце проживання, номер телефону"
        {...form.getInputProps("first_middle_last_name_father")}
      />
      <InputArea
        disabled={state}
        name="ПІБ матері, дата народження (смерті, причина), ким і де працює, місце проживання, номер телефону"
        {...form.getInputProps("first_middle_last_name_mother")}
      />
      <InputArea
        disabled={state}
        name="ПІБ брата (сестри), дата народження, ким і де працює, місце проживання, номер телефону"
        {...form.getInputProps("first_middle_last_name_brother")}
      />
      <InputArea
        disabled={state}
        name="Стан здоров'я членів сім'ї (важкі захворювання, залежність, інвалідність)"
        {...form.getInputProps("family_status")}
      />

      <LocalSubmit
        submitBtnRef={submitBtnRef}
        state={state}
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    </InputForm>
  );
}
