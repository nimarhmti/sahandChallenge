"use client";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { baseColumnModel } from "./Table.interface";
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//table head items
export const TableHeadItem = ({ header }: baseColumnModel) => (
  <StyledTableCell align="right">{header}</StyledTableCell>
);

//table body items
export const TableRowItems = ({ item }: any) => (
  <StyledTableRow key={item.id}>
    <StyledTableCell component="th" scope="row" align="right">
      {item.name}
    </StyledTableCell>
    <StyledTableCell align="right">{item.calories}</StyledTableCell>
    <StyledTableCell align="right">{item.fat}</StyledTableCell>
    <StyledTableCell align="right">{item.carbs}</StyledTableCell>
    <StyledTableCell align="right">{item.protein}</StyledTableCell>
  </StyledTableRow>
);
