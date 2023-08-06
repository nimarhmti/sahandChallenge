"use client";
import { useMemo } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHeadItem, TableRowItems } from "./TableItems";
import { baseColumnModel } from "./Table.interface";
//change style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

//row and cells
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  id: string
) {
  return { name, calories, fat, carbs, protein, id };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4, "11"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "22"),
  createData("Eclair", 262, 16.0, 24, 6.0, "33"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "44"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "55"),
];
// interfaces

interface Props {
  column?: baseColumnModel[];
  data: any[] | undefined;
}
//main components
export const TableWrapper = ({ data, column }: Props) => {
  const memorizedData = useMemo(() => data ?? [], [data]);
  const memorizedColumn = useMemo(() => column, [column]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">
              Dessert (100g serving)
            </StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {memorizedData?.map((row, index) => (
            <TableRowItems item={row} key={row.id} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
