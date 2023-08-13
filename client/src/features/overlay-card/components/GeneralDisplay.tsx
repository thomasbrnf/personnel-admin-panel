import { GeneralData } from "../../../types/types";
import { TextBlock } from "./TextBlock";

export function GeneralDisplay({ data }: { data: GeneralData }) {
  return (
    <>
      <TextBlock name="Дата народження" dynamicData={data.birthdate} />
      <TextBlock
        name="Серія та № паспорта, ким і коли виданий"
        dynamicData={`${data.civ_id} ${data.civ_id_who} ${data.civ_id_date}`}
      />
      <TextBlock
        name="Місце народження (адреса)"
        dynamicData={data.city_of_birth}
      />
      <TextBlock
        name="Адреса проживання (прописка та фактична)"
        dynamicData={`${data.adress_city} ${data.adress_street} ${data.adress_apt}`}
      />
      <TextBlock
        name="Освіта цивільна, навчальний заклад, рік завершення, спеціальність"
        dynamicData={`${data.edu_type} ${data.edu_uni} ${data.edu_spec} ${data.edu_year} ${data.edu_country}`}
      />
      <TextBlock name="Номер телефону" dynamicData={data.phone_num} />
      <TextBlock
        name="Місце роботи перед проходженням служби"
        dynamicData={data.last_work}
      />
      <TextBlock
        name="Розмір одягу, взуття, головного убору"
        dynamicData={`${data.size_clothes} ${data.size_shoes} ${data.size_head}`}
      />
      <TextBlock
        name="Зріст та вага"
        dynamicData={`${data.height} ${data.weight}`}
      />
    </>
  );
}
