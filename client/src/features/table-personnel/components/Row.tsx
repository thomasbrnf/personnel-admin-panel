import { MainData } from "../../../types/types";

interface RowProps {
  person: MainData;
  onDoubleClick: () => void;
}

export function Row({ person, onDoubleClick }: RowProps) {
  return (
    <tr onDoubleClick={onDoubleClick}>
      <td>{person.enum}</td>
      <td>{person.name}</td>
    </tr>
  );
}
