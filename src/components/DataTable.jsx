import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Visibility, Sort, GroupWork, FilterList } from '@mui/icons-material';
import Sidebar from './Sidebar';
import ColumnHideShow from './ColumnHideShow';
import SortColumns from './SortColumns';
import GroupColumns from './GroupColumns';
import FilterColumns from './FilterColumns';

const DataTable = ({ data }) => {
  const categories = useMemo(() => [...new Set(data.map(item => item.category))], [data]);
  const subcategories = useMemo(() => [...new Set(data.map(item => item.subcategory))], [data]);

  const filterTypes = useMemo(() => ({
    
  }), []);

  const columns = useMemo(() => [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'category', header: 'Category' },
    { accessorKey: 'subcategory', header: 'Subcategory' },
    { accessorKey: 'createdAt', header: 'Created At' },
    { accessorKey: 'updatedAt', header: 'Updated At' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'sale_price', header: 'Sale Price' },
  ], []);

  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarContent, setSidebarContent] = useState(null);

  const handleIconClick = (content, title) => {
    setSidebarContent({ content, title });
    setShowSidebar(true);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {showSidebar && (
        <Sidebar 
          title={sidebarContent?.title}
          onClose={() => setShowSidebar(false)}
        >
          {sidebarContent?.content}
        </Sidebar>
      )}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <IconButton
          onClick={() => handleIconClick(
            (table) => <ColumnHideShow table={table} />,
            "Hide/Show Columns"
          )}
        >
          <Visibility />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(
            (table) => <SortColumns table={table} />,
            "Sort Columns"
          )}
        >
          <Sort />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(
            (table) => <GroupColumns table={table} />,
            "Group Columns"
          )}
        >
          <GroupWork />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(
            (table) => <FilterColumns table={table} categories={categories} subcategories={subcategories} />,
            "Filter Columns"
          )}
        >
          <FilterList />
        </IconButton>
      </Box>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enableGrouping
        enableColumnFilters
        enableSorting
        enableGlobalFilter
        filterTypes={filterTypes}
        renderTopToolbarCustomActions={({ table }) => (
          <>
            {sidebarContent && sidebarContent.content(table)}
          </>
        )}
      />
    </Box>
  );
};

export default DataTable;
