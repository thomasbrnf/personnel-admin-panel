import { SqueezeBox } from "../../components/squeeze-box";
import { PersonData } from "../../types/types";
import { getSortedData } from "../../services";
import { Overlay } from "../../layout";
import {
  FamilyDisplay,
  MilitaryDisplay,
  GeneralDisplay,
  NotesDisplay,
  HeadDisplay,
  Buttons,
} from "./components";

export function OverlayCard({
  data,
  opened,
  onClose,
}: {
  data: PersonData;
  opened: boolean;
  onClose: () => void;
}) {
  const sortedData = getSortedData(data);
  return (
    <Overlay
      size="xl"
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      closeOnClickOutside={true}
    >
      <HeadDisplay data={sortedData.mainData} />
      <SqueezeBox
        mil={<MilitaryDisplay data={sortedData.militaryData} />}
        gen={<GeneralDisplay data={sortedData.generalData} />}
        fam={<FamilyDisplay data={sortedData.familyData} />}
        notes={<NotesDisplay data={sortedData.notesData} />}
      />
      <Buttons id={data.id} onClose={onClose} />
    </Overlay>
  );
}
