"use client";
import { useMemo, memo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableRowItems } from "./TableItems";
import type { Props, baseColumnModel } from "./Table.interface";
import { TableHeadComponents } from "./TabelHeader";
import { TableRowComponents } from "./TableRow";

// interfaces

//main components
const TableWrapper = ({ data, column }: Props) => {
  const memorizedData = useMemo(() => data ?? [], [data]);
  const memorizedColumn = useMemo(() => column, [column]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHeadComponents col={memorizedColumn} />
        <TableRowComponents column={memorizedColumn} data={memorizedData} />
      </Table>
    </TableContainer>
  );
};

export default memo(TableWrapper);
