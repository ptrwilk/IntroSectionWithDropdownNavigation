import { Collapse, ListItem, ListItemButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useState } from "react";
import { IconArrowUp, IconArrowDown } from "../../../assets";

interface IMenuItemProps {
  className?: string;
  icon?: any;
  text?: string;
  children?: any;
}

const MenuItem = ({ className, children, icon, text }: IMenuItemProps) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    if (children) {
      setOpen(!open);
    }
  };

  return (
    <>
      <ListItem
        className={classNames(styles["container"], className)}
        onClick={handleClick}
      >
        {icon && <img className={styles["img-icon"]} src={icon} />}
        <Typography className={styles["text"]}>{text}</Typography>
        {children && (
          <img
            className={styles["img-arrow"]}
            src={open ? IconArrowUp : IconArrowDown}
          />
        )}
      </ListItem>
      {children && <Collapse in={open}>{children}</Collapse>}
    </>
  );
};

export default MenuItem;
