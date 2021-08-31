import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NavItem from '@components/NavItem/NavItem'
import { FaPaperPlane, FaRegPaperPlane, FaSignOutAlt } from 'react-icons/fa';

export const MainListItems = (props) => (
  <div>
    <NavItem to='documentsSent' icon={FaPaperPlane} title="Oficios enviados" active={props.selected["Oficios enviados"]} onCLick={props.onCLick} />
    <NavItem to='documentsReceived' icon={FaRegPaperPlane} title="Oficios recibidos" active={props.selected["Oficios recibidos"]} onCLick={props.onCLick} />
    <NavItem to='login' icon={FaSignOutAlt} title="Cerrar sesión" active={props.selected["Cerrar sesión"]} onCLick={props.onCLick} />
  </div>
);