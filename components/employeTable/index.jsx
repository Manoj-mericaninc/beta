"use client";
import React from "react";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import rows from "./data";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

const Employeetables = () => {
  //data for header of table
  const columns = [
    {
      field: "id",
      headerClassName: "bg-slate-200",
      width: 70,
      renderHeader: () => <strong className="text-slate-700">{"ID"}</strong>,
    },
    {
      field: "name",
      headerClassName: "bg-slate-200",
      renderHeader: () => (
        <strong className="text-slate-700">{"Business Name"}</strong>
      ),

      width: 130,
    },
    {
      field: "client",
      headerClassName: "bg-slate-200",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Client ID"}</strong>
      ),
    },
    {
      field: "email",
      type: "email",
      headerClassName: "bg-slate-200",
      headerName: "Email",
      width: 100,
      renderHeader: () => <strong className="text-slate-700">{"Email"}</strong>,
    },
    {
      field: "contact",
      headerClassName: "bg-slate-200",
      headerName: "Contact",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Contact"}</strong>
      ),
    },
    {
      field: "net",
      headerClassName: "bg-slate-200",
      headerName: "Net Terms",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Net Terms"}</strong>
      ),
    },
    {
      field: "termination",
      headerClassName: "bg-slate-200",
      headerName: "Termination Notice",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Termination Notice"}</strong>
      ),
    },
    {
      field: "status",
      headerClassName: "bg-slate-200",
      headerName: "Status",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Status"}</strong>
      ),
    },
    {
      field: "category",
      headerClassName: "bg-slate-200",
      headerName: "Category",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Category"}</strong>
      ),
    },
    {
      field: "active",
      headerClassName: "bg-slate-200",
      headerName: "Placements",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Placements"}</strong>
      ),
    },
    {
      field: "action",
      headerClassName: "bg-slate-200",
      headerName: "Action",
      width: 100,
      renderHeader: () => (
        <strong className="text-slate-700">{"Action"}</strong>
      ),
    },
  ];

  //for font size setting
  const theme = createTheme({
    typography: {
      htmlFontSize: 19,
    },
  });

  //.....................filters
  function QuickSearchToolbar() {
    return (
      <div className="flex justify-between p-4 ">
        <div>
          <GridToolbarQuickFilter />
        </div>
        <div>
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-start pl-[17rem] bg-slate-900 p-3">
        <FiUserPlus />
        <h1 className="text-xl text-slate-50">Streamsss Software Solutions</h1>
      </div>

      {/* main table container */}
      <div className="overflow-y-hidden w-11/12 mt-8 mx-auto">
        {/* ..theme component.. */}
        <ThemeProvider theme={theme}>
          {/* ..box component.. */}
          <Box className="h-fit">
            {/* ..table data component.. */}
            <DataGrid
              sx={{
                p: 1,
                "& .MuiDataGrid-cell:hover": {
                  color: "primary.main",
                },
              }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              components={{
                Toolbar: QuickSearchToolbar,
              }}
            />
          </Box>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Employeetables;
