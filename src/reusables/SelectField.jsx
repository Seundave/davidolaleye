import { useState } from "react";
import { FormControl, FormHelperText, Menu, MenuItem, IconButton } from "@mui/material";
// import SearchInput from "../../reusables/SearchInput";

const ITEM_HEIGHT = 36;
const ITEM_PADDING_TOP = 8;

const SelectField = ({
  height,
  error,
  children,
  placeholder,
  defaultValue = "",
  label,
  required,
  my,
  ...other
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <label className="text-[12px] md:text-[14px]">
        {label}
        <span className="text-red-600">{required && "*"}</span>
      </label>
      <div onClick={handleOpen} className="cursor-pointer">
        <FormControl fullWidth>
          <div
            style={{
              height,
              border: "1px solid #a0aec0",
              padding: "10px 15px",
              fontSize: "14px",
              fontFamily: "Poppins, sans-serif",
              borderRadius: "0.375rem",
              boxSizing: "border-box",
              backgroundColor: "#f9f9f9",
            }}
          >
            {placeholder}
          </div>
        </FormControl>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          },
        }}
      >
        <div className="p-3">
          {children}
        </div>
      </Menu>
      {error && <p className="text-[red] text-[12px] mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;
