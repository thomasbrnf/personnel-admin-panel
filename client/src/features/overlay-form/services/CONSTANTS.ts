import { SortedData } from "../../../types/types";

export const initialState = {
  id: 0,
  enum: "",
  name: "",
  rank: "",
  postion: "",
  rank_date: "",
  platoon: "",
  squad: "",
  SHPK: "",
  postiona_assign_date: "",
  postiona_assign_num: "",
  draft_center: "",
  drafting_date: "",
  oath_date: "",
  mil_ticket_num: "",
  serving_before_2402: "",
  ato_ooc_ubd_name: "",
  ato_ooc_ubd_spec: "",
  ato_ooc_ubd_serial: "",
  ato_ooc_ubd_num: "",
  ato_ooc_ubd_date_start: "",
  ato_ooc_ubd_date_end: "",
  previous_service: "",
  previous_service_name: "",
  previous_service_spec: "",
  previous_service_order_num: "",
  previous_service_date_start: "",
  previous_service_date_end: "",
  VOS: "",
  VOS_codes: "",
  date_a7788: "",
  edu_mil: "",
  edu_mil_uni: "",
  edu_mil_spec: "",
  edu_mil_year: "",
  edu_mil_country: "",
  birthdate: "",
  ipn_num: "",
  civ_id: "",
  civ_id_date: "",
  civ_id_who: "",
  bank_name: "",
  card_num: "",
  iban: "",
  driver_licens_category: "",
  driver_licens_date: "",
  city_of_birth: "",
  adress_city: "",
  adress_street: "",
  adress_apt: "",
  edu_type: "",
  edu_uni: "",
  edu_spec: "",
  edu_year: "",
  edu_country: "",
  phone_num: "",
  last_work: "",
  size_clothes: "",
  size_shoes: "",
  size_head: "",
  height: "",
  weight: "",
  marital_status: "",
  first_middle_last_name_wife_husband: "",
  first_middle_last_name_childern: "",
  first_middle_last_name_father: "",
  first_middle_last_name_mother: "",
  first_middle_last_name_brother: "",
  family_status: "",
  notes: "",
};

export const initialMainData = {
  id: 0,
  enum: "",
  name: "",
};

export const initialMilitaryData = {
  rank: "",
  postion: "",
  rank_date: "",
  platoon: "",
  squad: "",
  SHPK: "",
  postiona_assign_date: "",
  postiona_assign_num: "",
  draft_center: "",
  drafting_date: "",
  oath_date: "",
  mil_ticket_num: "",
  serving_before_2402: "",
  ato_ooc_ubd_name: "",
  ato_ooc_ubd_spec: "",
  ato_ooc_ubd_serial: "",
  ato_ooc_ubd_num: "",
  ato_ooc_ubd_date_start: "",
  ato_ooc_ubd_date_end: "",
  previous_service_name: "",
  previous_service_spec: "",
  previous_service_order_num: "",
  previous_service_date_start: "",
  previous_service_date_end: "",
  VOS: "",
  VOS_codes: "",
  date_a7788: "",
  edu_mil_uni: "",
  edu_mil_spec: "",
  edu_mil_year: "",
  edu_mil_country: "",
};

export const initialGeneralData = {
  birthdate: "",
  ipn_num: "",
  civ_id: "",
  civ_id_date: "",
  civ_id_who: "",
  bank_name: "",
  card_num: "",
  iban: "",
  driver_licens_category: "",
  driver_licens_date: "",
  city_of_birth: "",
  adress_city: "",
  adress_street: "",
  adress_apt: "",
  edu_type: "",
  edu_uni: "",
  edu_spec: "",
  edu_year: "",
  edu_country: "",
  phone_num: "",
  last_work: "",
  size_clothes: "",
  size_shoes: "",
  size_head: "",
  height: "",
  weight: "",
};

export const initialFamilyData = {
  marital_status: "",
  first_middle_last_name_wife_husband: "",
  first_middle_last_name_childern: "",
  first_middle_last_name_father: "",
  first_middle_last_name_mother: "",
  first_middle_last_name_brother: "",
  family_status: "",
};

export const initialNotesData = {
  notes: "",
};

export const initialPersonData: SortedData = {
  mainData: initialMainData,
  militaryData: initialMilitaryData,
  generalData: initialGeneralData,
  familyData: initialFamilyData,
  notesData: initialNotesData,
};
