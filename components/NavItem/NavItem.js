import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Link from "next/link"
// import Icon from '@material-ui/core/Icon';
const NavItem = ({ title, icon, active, description, to, onCLick }) => {
  return (
    <Link
      href={to}
    >
      <ListItem button selected={active} onClick={() => onCLick(title)}>
        <ListItemIcon>
          {icon()}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
}
export default NavItem;