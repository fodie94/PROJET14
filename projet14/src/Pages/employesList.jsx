import React, { useState } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.list);

  const columns = [
    {
      name: "firstName",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "lastName",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "dateOfBirth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "startDate",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "city",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "state",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "zipCode",
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: "department",
      selector: (row) => row.department,
      sortable: true,
    },
  ];

  const data = employees.map((employee) => ({
    firstName: employee.firstName,
    lastName: employee.lastName,
    dateOfBirth: employee.dateOfBirth,
    startDate: employee.startDate,
    street: employee.street,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
    department: employee.department,
  }));

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const filterValue = event.target.value.toLowerCase();

    const newData = data.filter((row) => {
      const regex = new RegExp(filterValue, "i");
      return Object.values(row).some((value) => regex.test(value));
    });

    setRecords(newData);
  }

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#1b7bbb",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
      },
    },
    pagination: {
      style: {
        paddingTop: "15px",
        paddingBottom: "15px",
      },
    },
    // Ajout d'une classe pour les lignes paires
    rows: {
      style: {
        "&:nth-child(even)": {
          backgroundColor: "lightgreen", // Couleur de fond verte pour les lignes paires
        },
        "&:nth-child(odd)": {
          backgroundColor: "lavenderblush", // Couleur de fond lavande claire pour les lignes impaires
        },
      },
    },
  };

  return (
    <div>
      <div className="titlesearch">
        <div className="title">
          <h1>Liste des employés</h1>
        </div>
        <div className="search">
          <label htmlFor="searchInput">Rechercher :</label>
          <input type="text" id="searchInput" onChange={handleFilter} />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={records}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
}

export default EmployeeList;
