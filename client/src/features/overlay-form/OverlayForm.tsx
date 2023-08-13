import { useEffect } from "react";
import { TextInput } from "@mantine/core";
import { SqueezeBox } from "../../components/squeeze-box";
import { setMainData, initialState, submitData } from "./services";
import { usePersonData, useOverlayForm, useMainForm } from "./hooks";
import { SortedData } from "../../types/types";
import { Overlay } from "../../layout";
import {
  MilitaryForm,
  GeneralForm,
  NotesForm,
  FamilyForm,
  GlobalSubmit,
} from "./components";

export function OverlayForm({
  opened,
  close,
  data,
}: {
  opened: boolean;
  close: () => void;
  data: SortedData;
}) {
  const [personData, setPersonData] = usePersonData();
  const form = useMainForm(data.mainData);
  const { setData } = useOverlayForm(setPersonData);

  useEffect(() => {
    form.reset();
    setPersonData(initialState);
  }, [opened]);

  const handleSubmit = async () => {
    form.validate();

    if (form.isValid()) {
      const formValues = form.values;

      setMainData(personData, formValues);
      await submitData(personData);
      close();
    } else {
      return;
    }
  };

  return (
    <Overlay
      size="lg"
      opened={opened}
      onClose={close}
      withCloseButton={true}
      closeOnClickOutside={false}
    >
      <TextInput
        mx={25}
        my={20}
        label="№ з/п"
        {...form.getInputProps("enum")}
      />
      <TextInput
        mx={25}
        my={20}
        label="Прізвище, ім'я, по батькові"
        withAsterisk
        {...form.getInputProps("name")}
      />

      <SqueezeBox
        mil={
          <MilitaryForm initialData={data.militaryData} onSubmit={setData} />
        }
        gen={<GeneralForm initialData={data.generalData} onSubmit={setData} />}
        fam={<FamilyForm initialData={data.familyData} onSubmit={setData} />}
        notes={<NotesForm initialData={data.notesData} onSubmit={setData} />}
      />

      <GlobalSubmit onClose={close} onSubmit={handleSubmit} />
    </Overlay>
  );
}
