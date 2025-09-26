import React from "react";
import { Button } from "../../../components/button";
import CustomTable from "../../../components/table";

const List = () => {
  const columns = [
    {
      header: "Title",
      accessor: "title",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Price",
      accessor: "price",
      headerClassName: "text-left font-bold",
    },
    {
      header: "Description",
      accessor: "description",
      headerClassName: "text-left font-bold",
    },
  ];

  return (
    <div className="flex flex-col">
      <Button>Add</Button>

      <CustomTable
        columns={columns}
        data={[]}
        className="mt-4 border-collapse border border-gray-200 shadow-lg"
        headerClassName="bg-gray-100 text-gray-700"
        bodyClassName="bg-white"
      />
    </div>
  );
};

export default List;