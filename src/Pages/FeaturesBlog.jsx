import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown, FileText, Search, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const FeaturesBlog = () => {
  const axiosSecure = useAxiosSecure();
  const [featureBlog, setFeatureBlog] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([]);

  useEffect(() => {
    const fetchAllBlogData = async () => {
      try {
        const { data } = await axiosSecure.get(`/features-blogs`);
        setFeatureBlog(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchAllBlogData();
  }, []);

  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("title", {
      cell: (info) => info.getValue(),
      header: () => (
        <span className="flex items-center">
          <FaFileAlt className="mr-2" /> Title
        </span>
      ),
    }),
    columnHelper.accessor("category", {
      cell: (info) => info.getValue(),
      header: () => (
        <span className="flex items-center">
          <Tag className="mr-2" /> Category
        </span>
      ),
    }),
    columnHelper.accessor("sortDescription", {
      cell: (info) => info.getValue(),
      header: () => (
        <span className="flex items-center">
          <FileText className="mr-2" /> Description
        </span>
      ),
    }),
  ];

  const table = useReactTable({
    data: featureBlog,
    columns,
    state: { sorting, globalFilter },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex flex-col min-h-screen max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 relative">
        <input
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="You can Search Title Name, Category Name, Description Name..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500-400 focus:border-red-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        ></Search>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-bold text-green-500 uppercase tracking-wider"
                  >
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-non flex items-center"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <ArrowUpDown className="ml-2" size={14}></ArrowUpDown>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturesBlog;
