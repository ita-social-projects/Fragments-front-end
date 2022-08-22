import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import { COLUMNS } from "./Columns.js";
import styles from "../UI/adminPage/AdminTable.module.scss";
import { Checkbox } from "./Checkbox";
import { CustomRole } from "./CustomRole.jsx";
import AdminPagination from "./AdminPagination.jsx";

const AdminTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [currentPage, setCurrentPage] = useState(1);

  const data = useMemo(
    () => [
      {
        Id: 1,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Адмін", "Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 12,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Модератор"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 14,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 11,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 21,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 41,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 51,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 16,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 31,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 13,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 17,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 71,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 81,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 68,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 99,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 64,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 233,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 111,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 231,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 331,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
      {
        Id: 33,
        Email: "fdsfsdf@gmail.com",
        Fullname: "Moris Kul",
        Role: <CustomRole roles={["Користувач"]} />,
        RegisterDate: "18.09.2021",
        LastActivity: "03.05.2022",
        Category: "Представник влади",
      },
    ],
    []
  );

  const [selectedRows, setSelectedRows] = useState([]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  useEffect(() => {
    let selectedTemp = [];
    selectedFlatRows.forEach((element) => {
      selectedTemp.push(element.original.Id);
    });
    setSelectedRows(selectedTemp);
  }, [selectedFlatRows]);

  return (
    <>
      <div className={styles.tableWithPagination}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <AdminPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
export default AdminTable;
