import React, { useState } from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

interface IMenu {
  classes: any;
  menu: any;
}

const Menu = ({ classes, menu }: any) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const renderSubMenuItems = () => {
    return menu.children.map(({ id, icon, active }: any) => (
      <ListItem
        key={id}
        button
        className={clsx(classes.item, active && classes.itemActiveItem)}
      >
        <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.itemPrimary,
          }}
        >
          {id}
        </ListItemText>
      </ListItem>
    ))
  }

  return (
    <>
      <ListItem className={classes.categoryHeader} onClick={toggleMenu}>
        <ListItemText
          classes={{
            primary: classes.categoryHeaderPrimary,
          }}
        >
          {menu.id}
        </ListItemText>
        {open ? <ExpandLess className={classes.toggleIcon} /> : <ExpandMore className={classes.toggleIcon} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderSubMenuItems()}
        </List>
      </Collapse>
      <Divider className={open ? classes.divider : null} />
    </>
  );

}

export default Menu;