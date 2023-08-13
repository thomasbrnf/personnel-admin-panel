import { MainData } from "../../../types/types";
import { Text, Title } from "@mantine/core";

export function HeadDisplay({ data }: { data: MainData }) {
  return (
    <>
      <Text align="center" style={{ marginTop: 20 }}>
        № з/п {data.enum}
      </Text>
      <Title align="center" order={2} style={{ marginBottom: 15 }}>
        {data.name}
      </Title>
    </>
  );
}
