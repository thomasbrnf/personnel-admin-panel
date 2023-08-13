import { FamilyData } from "../../../types/types";
import { TextBlock } from "./TextBlock";

export function FamilyDisplay({ data }: { data: FamilyData }) {
  return (
    <>
      <TextBlock
        name="Сімейний стан (одружений/заміжня/розлучена/ий з якого року)"
        dynamicData={data.marital_status}
      />
      <TextBlock
        name="ПІБ дружини (чоловіка), дата народження, ким і де працює, місце проживання, номер телефону"
        dynamicData={data.first_middle_last_name_wife_husband}
      />
      <TextBlock
        name="ПІБ дитини, дата народження, де навчається, місце"
        dynamicData={data.first_middle_last_name_childern}
      />
      <TextBlock
        name="ПІБ батька, дата народження (смерті, причина), ким і де працює, місце проживання, номер телефону"
        dynamicData={data.first_middle_last_name_father}
      />
      <TextBlock
        name="ПІБ матері, дата народження (смерті, причина), ким і де працює, місце проживання, номер телефону"
        dynamicData={data.first_middle_last_name_mother}
      />
      <TextBlock
        name="ПІБ брата (сестри), дата народження, ким і де працює, місце проживання, номер телефону"
        dynamicData={data.first_middle_last_name_brother}
      />
      <TextBlock
        name="Стан здоров'я членів сім'ї (важкі захворювання, залежність, інвалідність)"
        dynamicData={data.family_status}
      />
    </>
  );
}
