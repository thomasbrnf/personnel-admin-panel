import { MilitaryData } from "../../../types/types";
import { TextBlock } from "./TextBlock";

export function MilitaryDisplay({ data }: { data: MilitaryData }) {
  return (
    <>
      <TextBlock name="Військове звання" dynamicData={data.rank} />
      <TextBlock name="Посада за штатом" dynamicData={data.postion} />
      <TextBlock
        name="Дата присвоєння останнього військового звання"
        dynamicData={data.rank_date}
      />
      <TextBlock
        name="Взвод, відділення"
        dynamicData={`${data.platoon} ${data.squad}`}
      />
      <TextBlock name="ШПК" dynamicData={data.SHPK} />
      <TextBlock
        name="Дата та № наказу призначення на посаду"
        dynamicData={data.postiona_assign_date}
      />
      <TextBlock
        name="Коли і яким військовим комісаріатом призваний"
        dynamicData={`${data.draft_center} ${data.drafting_date}`}
      />
      <TextBlock
        name="Серія та № військового квитка (посвідчення офіцера)"
        dynamicData={data.mil_ticket_num}
      />
      <TextBlock
        name="Місце служби до 24.02.2022 р."
        dynamicData={data.serving_before_2402}
      />
      <TextBlock name="Дана складання присяги" dynamicData={data.oath_date} />
      <TextBlock
        name="Участь в ООС(АТО), дата. Серія та № посвідчення УБД"
        dynamicData={`${data.ato_ooc_ubd_name} ${data.ato_ooc_ubd_spec} ${data.ato_ooc_ubd_serial} ${data.ato_ooc_ubd_num} ${data.ato_ooc_ubd_date_start} ${data.ato_ooc_ubd_date_end}`}
      />
      <TextBlock
        name="Чи проходив службу в інших військових частинах (коли, на якій посаді)"
        dynamicData={`${data.previous_service_name} ${data.previous_service_spec} ${data.previous_service_order_num} ${data.previous_service_date_start} ${data.previous_service_date_end}`}
      />
      <TextBlock name="ВОС (фактичний, за посадою)" dynamicData={data.VOS} />
      <TextBlock
        name="Найменування наявних ВОСів та їх коди"
        dynamicData={data.VOS_codes}
      />
      <TextBlock
        name="Дата прибуття у в/ч А7788"
        dynamicData={data.date_a7788}
      />
      <TextBlock
        name="Освіта військова, навчальний заклад, рік завершення, спеціальність"
        dynamicData={`${data.edu_mil_uni} ${data.edu_mil_spec} ${data.edu_mil_year} ${data.edu_mil_country}`}
      />
    </>
  );
}
