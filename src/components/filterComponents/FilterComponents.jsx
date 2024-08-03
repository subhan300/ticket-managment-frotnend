// FilterComponent.js
import React, { useState } from 'react';
import { Popover, List, ListItem, ListItemText } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const FilterComponent = ({ columnField, filterOptions, onFilterChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("none");

  const handleFilterIconClick = (e) => {
    setAnchorEl(e.currentTarget);
  };


  const handleFilterOptionClick = (option) => {
    const {  value } = option;
    
    const currentFilters = selectedFilter[columnField] || [];
    let newFilters;
    if(!currentFilters.includes("") && !value){
        newFilters=[value]
    }else{
        newFilters = currentFilters.includes(value)
        ? currentFilters.filter((filter) => filter !== value):value !== "" && currentFilters.includes("")?
        [...currentFilters.filter(val=>val !== ""),value]:
         [...currentFilters, value];
    }
   
    setSelectedFilter((prevFilters) => ({ ...prevFilters, [columnField]: newFilters }));
    onFilterChange(columnField, newFilters);
    setAnchorEl(null);
  };
  return (
    <div>
      <FilterAltIcon sx={{fontSize:"18px",marginTop:"4px",marginLeft:"4px",cursor:"pointer"}} onClick={handleFilterIconClick} />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {filterOptions.map((option) => (
            <ListItem  sx={{cursor:"pointer",background: selectedFilter[columnField]?.includes(option.value) ? "#F5F5F5" : "",}} key={option.value} onClick={() => handleFilterOptionClick(option)}>
              <ListItemText primary={option.label} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default FilterComponent;