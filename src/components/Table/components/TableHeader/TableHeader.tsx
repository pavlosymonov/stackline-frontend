import React from 'react';
import { Sort, TableHeader } from '../../Table.types';
import './TableHeader.scss';

interface ChevronIconProps {
  rotated: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ rotated }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      color: '#b0bbca'
    }}
    
  >
    <path
      d="M2 3L5 6L8 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


interface CustomTableHeaderProps {
  header: TableHeader;
  sort: Sort;
  onSort: (key: string) => void;
}

const CustomTableHeader: React.FC<CustomTableHeaderProps> = ({ header, sort, onSort }) => {
  const handleSort = () => {
    onSort(header.key);
  };

  return (
    <th className="custom-table-header" onClick={handleSort}>
      {header.label}
      <ChevronIcon rotated={header.key == sort.key && sort.direction === 'desc'} />
    </th>
  );
};

export default CustomTableHeader;