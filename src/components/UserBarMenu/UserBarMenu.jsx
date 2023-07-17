import {
  IconButton,
  MenuItem,
  Menu,
  Typography,
} from '@mui/material';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export default function UserBarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBtnClick = () => {
    dispatch(logout());
  }

  return (
    <div>
      <Typography component="span"> {name}</Typography>
      <IconButton
        size="large"
        onClick={handleOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleBtnClick}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
