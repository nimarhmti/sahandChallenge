import { Props, baseColumnModel } from "./Table.interface";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import translate from "@/assets/translate/translate.json";
const { DISABLED, ACTIVE } = translate.STATUS;

//customize
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
//main components
const cellAlign = "right";
export const TableRowComponents = ({ column, data }: Props) => {
  const rows = data?.map((row: any) => (
    <StyledTableRow key={row?.id}>
      {column.map((column: baseColumnModel) => {
        const Label = column?.key;
        const rowCell = row[Label];
        return (
          <StyledTableCell key={column.key} align={cellAlign}>
            {rowCell === ACTIVE ? (
              <Chip label={rowCell} color="primary" />
            ) : (
              rowCell
            )}
            {/* {row[column?.key]} */}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  ));

  return <TableBody>{rows}</TableBody>;
};
