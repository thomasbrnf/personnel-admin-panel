export interface PersonData {
  id: number;
  enum: string;
  name: string;
  rank: string;
  postion: string;
  rank_date: string;
  platoon: string;
  squad: string;
  SHPK: string;
  postiona_assign_date: string;
  postiona_assign_num: string;
  draft_center: string;
  drafting_date: string;
  oath_date: string;
  mil_ticket_num: string;
  serving_before_2402: string;
  ato_ooc_ubd_name: string;
  ato_ooc_ubd_spec: string;
  ato_ooc_ubd_serial: string;
  ato_ooc_ubd_num: string;
  ato_ooc_ubd_date_start: string;
  ato_ooc_ubd_date_end: string;
  previous_service_name: string;
  previous_service_spec: string;
  previous_service_order_num: string;
  previous_service_date_start: string;
  previous_service_date_end: string;
  VOS: string;
  VOS_codes: string;
  date_a7788: string;
  edu_mil_uni: string;
  edu_mil_spec: string;
  edu_mil_year: string;
  edu_mil_country: string;
  birthdate: string;
  ipn_num: string;
  civ_id: string;
  civ_id_date: string;
  civ_id_who: string;
  bank_name: string;
  card_num: string;
  iban: string;
  driver_licens_category: string;
  driver_licens_date: string;
  city_of_birth: string;
  adress_city: string;
  adress_street: string;
  adress_apt: string;
  edu_type: string;
  edu_uni: string;
  edu_spec: string;
  edu_year: string;
  edu_country: string;
  phone_num: string;
  last_work: string;
  size_clothes: string;
  size_shoes: string;
  size_head: string;
  height: string;
  weight: string;
  marital_status: string;
  first_middle_last_name_wife_husband: string;
  first_middle_last_name_childern: string;
  first_middle_last_name_father: string;
  first_middle_last_name_mother: string;
  first_middle_last_name_brother: string;
  family_status: string;
  notes: string;
}

export interface MainData {
  id: number;
  enum: string;
  name: string;
}

export interface MilitaryData {
  rank: string;
  postion: string;
  rank_date: string;
  platoon: string;
  squad: string;
  SHPK: string;
  postiona_assign_date: string;
  postiona_assign_num: string;
  draft_center: string;
  drafting_date: string;
  oath_date: string;
  mil_ticket_num: string;
  serving_before_2402: string;
  ato_ooc_ubd_name: string;
  ato_ooc_ubd_spec: string;
  ato_ooc_ubd_serial: string;
  ato_ooc_ubd_num: string;
  ato_ooc_ubd_date_start: string;
  ato_ooc_ubd_date_end: string;
  previous_service_name: string;
  previous_service_spec: string;
  previous_service_order_num: string;
  previous_service_date_start: string;
  previous_service_date_end: string;
  VOS: string;
  VOS_codes: string;
  date_a7788: string;
  edu_mil_uni: string;
  edu_mil_spec: string;
  edu_mil_year: string;
  edu_mil_country: string;
}

export interface GeneralData {
  birthdate: string;
  ipn_num: string;
  civ_id: string;
  civ_id_date: string;
  civ_id_who: string;
  bank_name: string;
  card_num: string;
  iban: string;
  driver_licens_category: string;
  driver_licens_date: string;
  city_of_birth: string;
  adress_city: string;
  adress_street: string;
  adress_apt: string;
  edu_type: string;
  edu_uni: string;
  edu_spec: string;
  edu_year: string;
  edu_country: string;
  phone_num: string;
  last_work: string;
  size_clothes: string;
  size_shoes: string;
  size_head: string;
  height: string;
  weight: string;
}

export interface FamilyData {
  marital_status: string;
  first_middle_last_name_wife_husband: string;
  first_middle_last_name_childern: string;
  first_middle_last_name_father: string;
  first_middle_last_name_mother: string;
  first_middle_last_name_brother: string;
  family_status: string;
}

export interface NotesData {
  notes: string;
}

export interface SortedData {
  mainData: {
    id: number;
    enum: string;
    name: string;
  };
  militaryData: {
    rank: string;
    postion: string;
    rank_date: string;
    platoon: string;
    squad: string;
    SHPK: string;
    postiona_assign_date: string;
    postiona_assign_num: string;
    draft_center: string;
    drafting_date: string;
    oath_date: string;
    mil_ticket_num: string;
    serving_before_2402: string;
    ato_ooc_ubd_name: string;
    ato_ooc_ubd_spec: string;
    ato_ooc_ubd_serial: string;
    ato_ooc_ubd_num: string;
    ato_ooc_ubd_date_start: string;
    ato_ooc_ubd_date_end: string;
    previous_service_name: string;
    previous_service_spec: string;
    previous_service_order_num: string;
    previous_service_date_start: string;
    previous_service_date_end: string;
    VOS: string;
    VOS_codes: string;
    date_a7788: string;
    edu_mil_uni: string;
    edu_mil_spec: string;
    edu_mil_year: string;
    edu_mil_country: string;
  };
  generalData: {
    birthdate: string;
    ipn_num: string;
    civ_id: string;
    civ_id_date: string;
    civ_id_who: string;
    bank_name: string;
    card_num: string;
    iban: string;
    driver_licens_category: string;
    driver_licens_date: string;
    city_of_birth: string;
    adress_city: string;
    adress_street: string;
    adress_apt: string;
    edu_type: string;
    edu_uni: string;
    edu_spec: string;
    edu_year: string;
    edu_country: string;
    phone_num: string;
    last_work: string;
    size_clothes: string;
    size_shoes: string;
    size_head: string;
    height: string;
    weight: string;
  };
  familyData: {
    marital_status: string;
    first_middle_last_name_wife_husband: string;
    first_middle_last_name_childern: string;
    first_middle_last_name_father: string;
    first_middle_last_name_mother: string;
    first_middle_last_name_brother: string;
    family_status: string;
  };
  notesData: {
    notes: string;
  };
}
