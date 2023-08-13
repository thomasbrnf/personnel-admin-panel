import { Text, List } from "@mantine/core";

interface InputProps {
  name: string;
  dynamicData: string;
}

export function TextBlock(props: InputProps) {
  return (
    <Text>
      <Text fw={700} span>
        {props.name}
      </Text>{" "}
      <List>
        <List.Item>{props.dynamicData}</List.Item>
      </List>
    </Text>
  );
}
