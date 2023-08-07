import { ColumnDefinitionType, baseColumnModel } from "./Table.interface";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

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
interface Props {
  col: baseColumnModel[];
  data: any[];
}

const TableRowComponents = ({ col, data }: Props) => {
  const rows = data?.map((row: any) => (
    <StyledTableRow key={row?.id}>
      {col.map((column: baseColumnModel) => {
        return (
          <StyledTableCell key={column.key} align="right">
            {row?.val}
          </StyledTableCell>
        );
      })}
    </StyledTableRow>
  ));

  return <TableBody>{rows}</TableBody>;
};
