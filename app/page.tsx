import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { FromWrapper } from "@/components/ui/card/FromWrapper";
import TableWrapper from "@/components/ui/Table/Table";
import { useInfoColumn } from "../components/user/column";
import translate from "@/assets/translate/translate.json";
import { UserForm } from "@/components/user/Userform";
import { getAllPerson } from "@/Services/Persons/getAllpersons";

export default async function Home() {
  const persons = await getAllPerson();
  return (
    <Container>
      <FromWrapper title={translate.GENERAL.TABLE}>
        <UserForm />
        <TableWrapper data={persons} column={useInfoColumn} />
      </FromWrapper>
    </Container>
  );
}
