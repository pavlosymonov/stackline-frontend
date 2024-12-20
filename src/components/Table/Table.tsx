import { useState } from "react";
import "./Table.scss"; // Optional: Add custom styles here
import TableHeader from "./components/TableHeader/TableHeader";
import { TableHeader as TableHeaderType, Sort } from "./Table.types";
import { Product, Sale } from "../../store/productSlice";

const headers: TableHeaderType[] = [
  {label: "WEEK ENDING", key: "weekEnding"},
  {label: "RETAIL SALES", key: "retailSales"},
  {label: "WHOLESALE SALES", key: "wholesaleSales"},
  {label: "UNITS SOLD", key: "unitsSold"},
  {label: "RETAILER MARGIN", key: "retailerMargin"},
];

const Table = ({ product }: { product: Product }) => {
  const [sort, setSort] = useState<Sort>({key: 'weekEnding', direction: 'asc'});

  const sortData = () => {
    return [...product.sales].sort((a, b) => {
      if (a[sort.key as keyof Sale] < b[sort.key as keyof Sale]) return sort.direction === 'asc' ? -1 : 1;
      if (a[sort.key as keyof Sale] > b[sort.key as keyof Sale]) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    })
  };

  const handleSort = (columnKey: string) => {
    const newDirection = sort.key === columnKey && sort.direction === 'desc' ? 'asc' : 'desc';
    setSort({ key: columnKey, direction: newDirection });
  };

  return (
    <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              {
                headers.map((header) => (
                  <TableHeader key={header.key} header={header} sort={sort} onSort={handleSort} />
                ))
              }
            </tr>
          </thead>
          <tbody>
            {sortData().map((row, index) => (
              <tr key={index}>
                <td>{row.weekEnding}</td>
                <td>{row.retailSales}</td>
                <td>{row.wholesaleSales}</td>
                <td>{row.unitsSold}</td>
                <td>{row.retailerMargin}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Table;
