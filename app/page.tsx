import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Input } from "@/components/ui/Input/Input";
import { FromWrapper } from "@/components/ui/card/FromWrapper";
import { TableWrapper } from "@/components/ui/Table/Table";
export default function Home() {
  const data = [{ name: "nima" }];
  return (
    <Container>
      <FromWrapper title="test">
        <TableWrapper data={data} />
      </FromWrapper>
    </Container>
  );
}
