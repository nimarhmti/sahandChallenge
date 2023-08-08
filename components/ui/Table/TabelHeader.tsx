import { baseColumnModel } from "./Table.interface";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
// customize Styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface Props {
  col: baseColumnModel[];
}
const cellAlign = "right";
//table head items
export const TableHeadComponents = ({ col }: Props) => {
  return (
    <TableHead>
      <TableRow>
        {col.map((item: baseColumnModel) => (
          <StyledTableCell align={cellAlign} key={item.key}>
            {item.header}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
