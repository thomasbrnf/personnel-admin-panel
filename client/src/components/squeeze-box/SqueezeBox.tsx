import { SqueezeBoxContainer } from "./props";

export function SqueezeBox({ mil, gen, fam, notes }: any) {
  return (
    <SqueezeBoxContainer
      squeezeBoxItems={[
        {
          nameId: "mil_info",
          displayName: "Військова інформація",
          children: mil,
        },
        {
          nameId: "gen_info",
          displayName: "Загальна інформація",
          children: gen,
        },
        {
          nameId: "fam_info",
          displayName: "Сімейна інформація",
          children: fam,
        },
        {
          nameId: "notes",
          displayName: "Примітки",
          children: notes,
        },
      ]}
    />
  );
}
