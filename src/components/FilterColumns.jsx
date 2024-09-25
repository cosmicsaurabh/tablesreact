import React, { useState } from 'react';
import { Box, FormControl, TextField, Autocomplete, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const FilterColumns = ({ table,categories,subcategories }) => {
  const [filterText, setFilterText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterText(value);

    // const filterValues = value.split(/[\s,]+/).filter(Boolean);
    // console.log(filterValues)

    table.getColumn('name').setFilterValue(value);
  };

    // const handleCategoryChange = (event, newValue) => {
    //   setSelectedCategories(newValue);
    //   const categoryColumn = table.getColumn('category');
    //   categoryColumn.setFilterValue(newValue.length ? newValue : undefined);
    // };
  
    // Handle subcategory filter change
    // const handleSubcategoryChange = (event, newValue) => {
    //   setSelectedSubcategories(newValue);
    //   const subcategoryColumn = table.getColumn('subcategory');
    //   subcategoryColumn.setFilterValue(newValue.length ? newValue : undefined);
    // };

    const handleCategoryChange = (event, newValue) => {
      setSelectedCategories(newValue);
      const categoryColumn = table.getColumn('category');
      categoryColumn.setFilterFn((row) => {
        return newValue.some((category) => row.original.category === category);
      });
    };
  
    const handleSubcategoryChange = (event, newValue) => {
      setSelectedSubcategories(newValue);
      const subcategoryColumn = table.getColumn('subcategory');
      subcategoryColumn.setFilterFn((row) => {
        return newValue.some((subcategory) => row.original.subcategory === subcategory);
      });
    };


    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    
  return (
    <Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          id="filter-names"
          variant="outlined"
          value={filterText}
          onChange={handleFilterChange}
          placeholder="Search by name"
        />
      </FormControl>

      {/* Multi-select for Category */}
      <Autocomplete
        multiple
        options={categories}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        value={selectedCategories}
        onChange={handleCategoryChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Filter by Category" placeholder="Category" />
        )}
        sx={{ mb: 2 }}
      />

      {/* Multi-select for Subcategory */}
      <Autocomplete
        multiple
        options={subcategories}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        value={selectedSubcategories}
        onChange={handleSubcategoryChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Filter by Subcategory" placeholder="Subcategory" />
        )}
      />
    </Box>
  );
};

export default FilterColumns;
