import * as ExcelJS from "exceljs";
import { PersonData } from "../../utils/helper";

interface Months {
  "01": string;
  "02": string;
  "03": string;
  "04": string;
  "05": string;
  "06": string;
  "07": string;
  "08": string;
  "09": string;
  "10": string;
  "11": string;
  "12": string;
  [key: string]: string;
}

export async function generateASCfile(personData: PersonData) {
  const blank = loadBlank();
  await blank.xlsx.readFile("./blanks/ASC.xlsx");
  const blankSheet = blank.getWorksheet(1);

  setData(personData, blankSheet);

  return blank;
}

function setData(personData: PersonData, blank: ExcelJS.Worksheet) {
  addOAthDate(personData.oath_date, blank);
  addMilTicket(personData.mil_ticket_num, blank);
  addName(personData.name, blank);
  addDraftDate(personData.drafting_date, blank);
  addDraftCenter(personData.draft_center, blank);
  addPreviousService(
    personData.previous_service_name,
    personData.previous_service_spec,
    personData.previous_service_date_start,
    personData.previous_service_date_end,
    personData.previous_service_order_num,
    blank,
  );
  addIpn(personData.ipn_num, blank);
  addFamilyData(
    personData.marital_status,
    personData.first_middle_last_name_wife_husband,
    personData.first_middle_last_name_childern,
    personData.first_middle_last_name_father,
    personData.first_middle_last_name_mother,
    blank,
  );
  addBirthData(personData.birthdate, personData.city_of_birth, blank);
  addEduData(
    personData.edu_type,
    personData.edu_uni,
    personData.edu_spec,
    blank,
  );
  addWorkData(personData.last_work, blank);
}

function addWorkData(last_work: string, blank: ExcelJS.Worksheet) {
  if (last_work) {
    const cell = blank.getCell("L21");
    cell.value = last_work;
  } else {
    return;
  }
}

function addEduData(
  edu_type: string,
  edu_uni: string,
  edu_spec: string,
  blank: ExcelJS.Worksheet,
) {
  if (edu_type && edu_uni && edu_spec) {
    const cellType = blank.getCell("L17");
    cellType.value = edu_type;

    const cellUni = blank.getCell("K18");
    cellUni.value = edu_uni;

    const cellSpec = blank.getCell("L19");
    cellSpec.value = edu_spec;
  } else {
    return;
  }
}

function addBirthData(
  birthdate: string,
  city_of_birth: string,
  blank: ExcelJS.Worksheet,
) {
  if (birthdate) {
    const cell = blank.getCell("K14");
    cell.value = `6. Дата та місце народження ${convertDate(birthdate)}`;
  } else if (city_of_birth) {
    const cell = blank.getCell("K15");
    cell.value = city_of_birth;
  } else {
    return;
  }
}

function addFamilyData(
  marital_status: string,
  first_middle_last_name_wife_husband: string,
  first_middle_last_name_childern: string,
  first_middle_last_name_father: string,
  first_middle_last_name_mother: string,
  blank: ExcelJS.Worksheet,
) {
  if (marital_status) {
    const cell = blank.getCell("A25");
    cell.value = `11. Сімейний стан ${marital_status} склад сім'ї:`;
  } else if (first_middle_last_name_wife_husband) {
    const [name, date] = first_middle_last_name_wife_husband.split(/\s*,\s*/);
    addNameAndDateToSheet(blank, 28, name, date);
  } else if (first_middle_last_name_childern) {
    const [name, date] = first_middle_last_name_childern.split(/\s*,\s*/);
    addNameAndDateToSheet(blank, 29, name, date);
  } else if (first_middle_last_name_father) {
    const [name, date] = first_middle_last_name_father.split(/\s*,\s*/);
    addNameAndDateToSheet(blank, 30, name, date);
  } else if (first_middle_last_name_mother) {
    const [name, date] = first_middle_last_name_mother.split(/\s*,\s*/);
    addNameAndDateToSheet(blank, 31, name, date);
  } else {
    return;
  }
}

function addNameAndDateToSheet(
  sheet: ExcelJS.Worksheet,
  row: number,
  name: string,
  date: string,
) {
  const cellTag = sheet.getCell(`A${row}`);
  cellTag.value =
    row === 31
      ? "мати"
      : row === 30
      ? "батько"
      : row === 29
      ? "дитина"
      : "жінка/чоловік";

  const cellName = sheet.getCell(`B${row}`);
  cellName.value = name;

  const cellDate = sheet.getCell(`E${row}`);
  cellDate.value = date;
}

function addIpn(ipn_num: string, blank: ExcelJS.Worksheet) {
  if (ipn_num) {
    const cell = blank.getCell("M8");
    cell.value = `4. ІПН ${ipn_num}`;
  } else {
    return;
  }
}

function addPreviousService(
  previous_service_name: string,
  previous_service_spec: string,
  previous_service_date_start: string,
  previous_service_date_end: string,
  previous_service_order_num: string,
  blank: ExcelJS.Worksheet,
) {
  if (previous_service_name && previous_service_spec) {
    const cell = blank.getCell("A6");
    cell.value = `${previous_service_name} ${previous_service_spec}`;
  } else if (previous_service_date_start && previous_service_date_end) {
    const cell = blank.getCell("D6");
    cell.value = `${previous_service_date_start} ${previous_service_date_end}`;
  } else if (previous_service_order_num) {
    const cell = blank.getCell("E6");
    cell.value = previous_service_order_num;
  } else {
    return;
  }
}

function addDraftCenter(draft_center: string, blank: ExcelJS.Worksheet) {
  if (draft_center) {
    const cell = blank.getCell("B41");
    cell.value = draft_center;
  } else {
    return;
  }
}

function addDraftDate(drafting_date: string, blank: ExcelJS.Worksheet) {
  if (drafting_date) {
    const cell = blank.getCell("D45");
    cell.value = `14. Призваний (прийнятий) на військову службу ${convertDate(
      drafting_date,
    )}`;

    const cellYear = blank.getCell("L2");
    const [day, month, year] = drafting_date.split(".");
    cell.value = year;
  } else {
    return;
  }
}

function addName(name: string, blank: ExcelJS.Worksheet) {
  if (name) {
    const [middle, first, last] = name.split(" ");
    const cellFirst = blank.getCell("K7");
    cellFirst.value = `П. ${middle} І. ${first}`;

    const cellLast = blank.getCell("K8");
    cellLast.value = `П. ${last}`;
  } else {
    return;
  }
}

function addMilTicket(mil_ticket_num: string, blank: ExcelJS.Worksheet) {
  if (mil_ticket_num) {
    const cell = blank.getCell("M6");
    cell.value = mil_ticket_num;
  } else {
    return;
  }
}

function addOAthDate(oath_date: string, blank: ExcelJS.Worksheet) {
  if (oath_date) {
    const cell = blank.getCell("A2");
    cell.value = convertDate(oath_date);
  } else {
    return;
  }
}

function convertDate(date: string) {
  const months: Months = {
    "01": "січня",
    "02": "лютого",
    "03": "березня",
    "04": "квітня",
    "05": "травня",
    "06": "червня",
    "07": "липня",
    "08": "серпня",
    "09": "вересня",
    "10": "жовтня",
    "11": "листопада",
    "12": "грудня",
  };

  const [day, month, year] = date.split(".");
  const ukMonth = months[month];
  return `${day} ${ukMonth} ${year} р.`;
}

function loadBlank() {
  return new ExcelJS.Workbook();
}
