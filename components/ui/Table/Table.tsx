"use client";
import { useMemo, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRowItems } from "./TableItems";
import type { baseColumnModel } from "./Table.interface";
import { TableHeadComponents } from "./TabelHeader";

// interfaces

interface Props {
  column: baseColumnModel[];
  data: any[] | undefined;
}
//main components
export const TableWrapper = ({ data, column }: Props) => {
  const memorizedData = useMemo(() => data ?? [], [data]);
  const memorizedColumn = useMemo(() => column, [column]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHeadComponents col={memorizedColumn} />
        <TableBody>
          {/* {memorizedData?.map((row, index) => (
            <TableRowItems item={row} key={row.id} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
