import {
  FamilyData,
  GeneralData,
  MainData,
  MilitaryData,
  NotesData,
  PersonData,
} from "../types/types";
import { SortedData } from "../types/types";

const onNull = "";

export function getPersonnelData(data: PersonData[]): MainData[] {
  return data.map((person) => {
    return getMainData(person);
  });
}

export function getSortedData(data: PersonData): SortedData {
  return {
    mainData: getMainData(data),
    militaryData: getMilitaryData(data),
    generalData: getGeneralData(data),
    familyData: getFamilyData(data),
    notesData: getNotesData(data),
  };
}

export function getMainData(data: PersonData): MainData {
  return {
    id: data.id,
    enum: data.enum ?? onNull,
    name: data.name ?? onNull,
  };
}

export function getMilitaryData(data: PersonData): MilitaryData {
  return {
    rank: data.rank ?? onNull,
    postion: data.postion ?? onNull,
    rank_date: data.rank_date ?? onNull,
    platoon: data.platoon ?? onNull,
    squad: data.squad ?? onNull,
    SHPK: data.SHPK ?? onNull,
    postiona_assign_date: data.postiona_assign_date ?? onNull,
    postiona_assign_num: data.postiona_assign_num ?? onNull,
    draft_center: data.draft_center ?? onNull,
    drafting_date: data.drafting_date ?? onNull,
    oath_date: data.oath_date ?? onNull,
    mil_ticket_num: data.mil_ticket_num ?? onNull,
    serving_before_2402: data.serving_before_2402 ?? onNull,
    ato_ooc_ubd_name: data.ato_ooc_ubd_name ?? onNull,
    ato_ooc_ubd_spec: data.ato_ooc_ubd_spec ?? onNull,
    ato_ooc_ubd_serial: data.ato_ooc_ubd_serial ?? onNull,
    ato_ooc_ubd_num: data.ato_ooc_ubd_num ?? onNull,
    ato_ooc_ubd_date_start: data.ato_ooc_ubd_date_start ?? onNull,
    ato_ooc_ubd_date_end: data.ato_ooc_ubd_date_end ?? onNull,
    previous_service_name: data.previous_service_name ?? onNull,
    previous_service_spec: data.previous_service_spec ?? onNull,
    previous_service_order_num: data.previous_service_order_num ?? onNull,
    previous_service_date_start: data.previous_service_date_start ?? onNull,
    previous_service_date_end: data.previous_service_date_end ?? onNull,
    VOS: data.VOS ?? onNull,
    VOS_codes: data.VOS_codes ?? onNull,
    date_a7788: data.date_a7788 ?? onNull,
    edu_mil_uni: data.edu_mil_uni ?? onNull,
    edu_mil_spec: data.edu_mil_spec ?? onNull,
    edu_mil_year: data.edu_mil_year ?? onNull,
    edu_mil_country: data.edu_mil_country ?? onNull,
  };
}

export function getGeneralData(data: PersonData): GeneralData {
  return {
    birthdate: data.birthdate ?? onNull,
    ipn_num: data.ipn_num ?? onNull,
    civ_id: data.civ_id ?? onNull,
    civ_id_date: data.civ_id_date ?? onNull,
    civ_id_who: data.civ_id_who ?? onNull,
    bank_name: data.bank_name ?? onNull,
    card_num: data.card_num ?? onNull,
    iban: data.iban ?? onNull,
    driver_licens_category: data.driver_licens_category ?? onNull,
    driver_licens_date: data.driver_licens_date ?? onNull,
    city_of_birth: data.city_of_birth ?? onNull,
    adress_city: data.adress_city ?? onNull,
    adress_street: data.adress_street ?? onNull,
    adress_apt: data.adress_apt ?? onNull,
    edu_type: data.edu_type ?? onNull,
    edu_uni: data.edu_uni ?? onNull,
    edu_spec: data.edu_spec ?? onNull,
    edu_year: data.edu_year ?? onNull,
    edu_country: data.edu_country ?? onNull,
    phone_num: data.phone_num ?? onNull,
    last_work: data.last_work ?? onNull,
    size_clothes: data.size_clothes ?? onNull,
    size_shoes: data.size_shoes ?? onNull,
    size_head: data.size_head ?? onNull,
    height: data.height ?? onNull,
    weight: data.weight ?? onNull,
  };
}

export function getFamilyData(data: PersonData): FamilyData {
  return {
    marital_status: data.marital_status ?? onNull,
    first_middle_last_name_wife_husband:
      data.first_middle_last_name_wife_husband ?? onNull,
    first_middle_last_name_childern:
      data.first_middle_last_name_childern ?? onNull,
    first_middle_last_name_father: data.first_middle_last_name_father ?? onNull,
    first_middle_last_name_mother: data.first_middle_last_name_mother ?? onNull,
    first_middle_last_name_brother:
      data.first_middle_last_name_brother ?? onNull,
    family_status: data.family_status ?? onNull,
  };
}

export function getNotesData(data: PersonData): NotesData {
  return {
    notes: data.notes ?? onNull,
  };
}
