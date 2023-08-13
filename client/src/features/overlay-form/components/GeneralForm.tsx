import { TextInput } from "@mantine/core";
import { useFormHook, useSubmit } from "../hooks";
import { GeneralData } from "../../../types/types";
import { LocalSubmit } from ".";
import {
  InputForm,
  InputSpaced,
  InputBox,
  InputGroup,
} from "../../../components/inputs";

export function GeneralForm({
  onSubmit,
  initialData,
}: {
  onSubmit: any;
  initialData: GeneralData;
}) {
  const { state, submitBtnRef, handleAccept, handleCancel } = useSubmit();
  const form = useFormHook<GeneralData>(initialData);

  return (
    <InputForm
      handleSubmit={form.onSubmit((values) => {
        onSubmit(values);
        submitBtnRef.current!.disabled = true;
      })}
    >
      <InputSpaced
        disabled={state}
        name="Дата народження"
        {...form.getInputProps("birthdate")}
      />

      <InputSpaced
        disabled={state}
        name="Індетифікаційний код"
        {...form.getInputProps("ipn_num")}
      />

      <InputBox name="Серія та № паспорта, ким і коли виданий">
        <InputSpaced
          disabled={state}
          name="Серія та номер"
          {...form.getInputProps("civ_id")}
        />
        <InputSpaced
          disabled={state}
          name="Коли"
          {...form.getInputProps("civ_id_date")}
        />
        <InputSpaced
          disabled={state}
          name="Ким"
          {...form.getInputProps("civ_id_who")}
        />
      </InputBox>

      <InputBox name="Банк в якому відкрито рахунок, номер карти, IBAN: (номер банківського рахунку)">
        <InputSpaced
          disabled={state}
          name="Назва банку"
          {...form.getInputProps("bank_name")}
        />
        <InputSpaced
          disabled={state}
          name="Номер карти"
          {...form.getInputProps("card_num")}
        />
        <InputSpaced
          disabled={state}
          name="IBAN"
          {...form.getInputProps("iban")}
        />
      </InputBox>

      <InputBox name="Водійське посвідчення: категорія, коли видане">
        <InputSpaced
          disabled={state}
          name="Категорія"
          {...form.getInputProps("driver_licens_category")}
        />
        <InputSpaced
          disabled={state}
          name="Коли видане"
          {...form.getInputProps("driver_licens_date")}
        />
      </InputBox>

      <InputSpaced
        disabled={state}
        name="Місце народження (адреса)"
        {...form.getInputProps("city_of_birth")}
      />

      <InputBox name="Адреса проживання (прописка та фактична)">
        <InputSpaced
          disabled={state}
          name="Місто"
          {...form.getInputProps("adress_city")}
        />
        <InputSpaced
          disabled={state}
          name="Вулиця"
          {...form.getInputProps("adress_street")}
        />
        <InputSpaced
          disabled={state}
          name="Квартира"
          {...form.getInputProps("adress_apt")}
        />
      </InputBox>

      <InputBox name="Освіта цивільна, навчальний заклад, рік завершення, спеціальність">
        <InputSpaced
          disabled={state}
          name="Тип освіти"
          {...form.getInputProps("edu_type")}
        />
        <InputSpaced
          disabled={state}
          name="Навчальний заклад"
          {...form.getInputProps("edu_uni")}
        />
        <InputSpaced
          disabled={state}
          name="Спеціальність"
          {...form.getInputProps("edu_spec")}
        />
        <InputSpaced
          disabled={state}
          name="Рік"
          {...form.getInputProps("edu_year")}
        />
        <InputSpaced
          disabled={state}
          name="Країна"
          {...form.getInputProps("edu_country")}
        />
      </InputBox>

      <InputSpaced
        disabled={state}
        name="Номер телефону"
        {...form.getInputProps("phone_num")}
      />

      <InputSpaced
        disabled={state}
        name="Місце роботи перед проходженням служби"
        {...form.getInputProps("last_work")}
      />

      <InputBox name="Розмір одягу, взуття, головного убору">
        <InputSpaced
          disabled={state}
          name="Одяг"
          {...form.getInputProps("size_clothes")}
        />
        <InputSpaced
          disabled={state}
          name="Взуття"
          {...form.getInputProps("size_shoes")}
        />
        <InputSpaced
          disabled={state}
          name="Головний убір"
          {...form.getInputProps("size_head")}
        />
      </InputBox>

      <InputGroup>
        <TextInput
          disabled={state}
          label="Зріст"
          {...form.getInputProps("height")}
        />
        <TextInput
          disabled={state}
          label="Вага"
          {...form.getInputProps("weight")}
        />
      </InputGroup>

      <LocalSubmit
        submitBtnRef={submitBtnRef}
        state={state}
        onAccept={handleAccept}
        onCancel={handleCancel}
      />
    </InputForm>
  );
}
