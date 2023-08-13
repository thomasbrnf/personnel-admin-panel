import { TextInput } from "@mantine/core";
import { MilitaryData } from "../../../types/types";
import { useFormHook } from "../hooks";
import { useSubmit } from "../hooks";
import { LocalSubmit } from ".";
import {
  InputForm,
  InputSpaced,
  InputBox,
  InputGroup,
} from "../../../components/inputs";

export function MilitaryForm({
  onSubmit,
  initialData,
}: {
  onSubmit: any;
  initialData: MilitaryData;
}) {
  const { state, submitBtnRef, handleAccept, handleCancel } = useSubmit();
  const form = useFormHook<MilitaryData>(initialData);

  return (
    <InputForm
      handleSubmit={form.onSubmit((values) => {
        onSubmit(values);
        submitBtnRef.current!.disabled = true;
      })}
    >
      <InputSpaced
        disabled={state}
        name="Військове звання"
        {...form.getInputProps("rank")}
      />
      <InputSpaced
        disabled={state}
        name="Посада за штатом"
        {...form.getInputProps("postion")}
      />

      <InputSpaced
        disabled={state}
        name="Дата присвоєння останнього війскьового звання"
        {...form.getInputProps("rank_date")}
      />

      <InputGroup>
        <TextInput
          disabled={state}
          label="Взвод"
          {...form.getInputProps("platoon")}
        />
        <TextInput
          disabled={state}
          label="Відділення"
          {...form.getInputProps("squad")}
        />
      </InputGroup>

      <InputSpaced
        disabled={state}
        name="ШПК"
        {...form.getInputProps("SHPK")}
      />

      <InputBox name={"Дата та № наказу призначення на посаду"}>
        <InputSpaced
          disabled={state}
          name="Дата"
          {...form.getInputProps("postiona_assign_date")}
        />
        <InputSpaced
          disabled={state}
          name="Номер наказу"
          {...form.getInputProps("postiona_assign_num")}
        />
      </InputBox>

      <InputBox name={"Коли і яким військовим комісаріатом призваний"}>
        <InputSpaced
          disabled={state}
          name="Дата"
          {...form.getInputProps("draft_center")}
        />
        <InputSpaced
          disabled={state}
          name="Військовий косімаріат"
          {...form.getInputProps("drafting_date")}
        />
      </InputBox>

      <InputSpaced
        disabled={state}
        name="Дата складання присяги"
        {...form.getInputProps("oath_date")}
      />

      <InputSpaced
        disabled={state}
        name="Серія та № військового квитка (посвідчення офіцера)"
        {...form.getInputProps("mil_ticket_num")}
      />
      <InputSpaced
        disabled={state}
        name="Місце служби до 24.02.2022 р."
        {...form.getInputProps("serving_before_2402")}
      />

      <InputBox name={"Участь в ООС(АТО), дата. Серія та № посвідчення УБД"}>
        <InputSpaced
          disabled={state}
          name="Назва"
          {...form.getInputProps("ato_ooc_ubd_name")}
        />
        <InputSpaced
          disabled={state}
          name="Посада"
          {...form.getInputProps("ato_ooc_ubd_spec")}
        />
        <InputSpaced
          disabled={state}
          name="Серія посвідчення"
          {...form.getInputProps("ato_ooc_ubd_serial")}
        />
        <InputSpaced
          disabled={state}
          name="Номер посвідчення"
          {...form.getInputProps("ato_ooc_ubd_num")}
        />
        <InputSpaced
          disabled={state}
          name="Від"
          {...form.getInputProps("ato_ooc_ubd_date_start")}
        />
        <InputSpaced
          disabled={state}
          name="До"
          {...form.getInputProps("ato_ooc_ubd_date_end")}
        />
      </InputBox>

      <InputBox
        name={
          "Чи проходив службу в інших військових частинах (коли, на якій посаді)"
        }
      >
        <InputSpaced
          disabled={state}
          name="Найменування частини"
          {...form.getInputProps("previous_service_name")}
        />
        <InputSpaced
          disabled={state}
          name="Посада"
          {...form.getInputProps("previous_service_spec")}
        />
        <InputSpaced
          disabled={state}
          name="Номер наказу по частині"
          {...form.getInputProps("previous_service_order_num")}
        />
        <InputSpaced
          disabled={state}
          name="Від"
          {...form.getInputProps("previous_service_date_start")}
        />
        <InputSpaced
          disabled={state}
          name="До"
          {...form.getInputProps("previous_service_date_end")}
        />
      </InputBox>

      <InputSpaced
        disabled={state}
        name="ВОС (фактичний, за посадою)"
        {...form.getInputProps("VOS")}
      />
      <InputSpaced
        disabled={state}
        name="Найменування наявних ВОСів та їх коди"
        {...form.getInputProps("VOS_codes")}
      />

      <InputSpaced
        disabled={state}
        name="Дата прибуття у в/ч A7788"
        {...form.getInputProps("date_a7788")}
      />

      <InputBox
        name={
          "Освіта військова, навчальний заклад, рік завершення, спеціальність"
        }
      >
        <InputSpaced
          disabled={state}
          name="Навчальний заклад"
          {...form.getInputProps("edu_mil_uni")}
        />
        <InputSpaced
          disabled={state}
          name="Спеціальність"
          {...form.getInputProps("edu_mil_spec")}
        />
        <InputSpaced
          disabled={state}
          name="Рік"
          {...form.getInputProps("edu_mil_year")}
        />
        <InputSpaced
          disabled={state}
          name="Країна"
          {...form.getInputProps("edu_mil_country")}
        />
      </InputBox>

      <LocalSubmit
        submitBtnRef={submitBtnRef}
        state={state}
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    </InputForm>
  );
}
