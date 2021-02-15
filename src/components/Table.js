import React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  {
    field: "image",
    headerName: "Image",
    width: 285,
    description: "This column is not sortable.",
    sortable: false,
    renderCell: (params) => <img src={params.value}></img>,
  },
  { field: "name", headerName: "Name", width: 285 },
  {
    field: "phone",
    headerName: "Phone",
    width: 285,
    description: "This column is not sortable.",
    sortable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 285,
    description: "This column is not sortable.",
    sortable: false,
  },
  { field: "dob", headerName: "Date of Birth", width: 285 },
];

export default function Table({ employees, keyword }) {
  keyword = keyword.toLowerCase();
  const result = employees.filter((employee) => {
    const name = (employee.name.first + " " + employee.name.last).toLowerCase();
    if (keyword !== "") {
      if (name.includes(keyword)) {
        return employee;
      }
    } else {
      return employees;
    }
  });

  const rows = result.map((employee) => ({
    id: employee.id.value,
    image: employee.picture.thumbnail,
    name: employee.name.first + " " + employee.name.last,
    phone: employee.phone,
    email: employee.email,
    dob: employee.dob.date.substring(0, 10),
  }));

  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} />
    </div>
  );
}
