import { DateInput } from "@mantine/dates";

export function InputDate({
  name,
  disabled,
  ...prop
}: {
  name: string;
  disabled: boolean;
}) {
  return (
    <DateInput
      my={20}
      dateParser={(value) => {
        const [day, month, year] = value.split("/");
        const dayNumber = Number(day);
        const monthNumber = Number(month);
        const yearNumber = Number(year);

        return new Date(yearNumber, monthNumber - 1, dayNumber);
      }}
      disabled={disabled}
      valueFormat="DD/MM/YYYY"
      label={name}
      description="день/місяць/рік"
      {...prop}
    />
  );
}
