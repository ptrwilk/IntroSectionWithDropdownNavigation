import {
  Box,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";
import { IconArrowUp, IconArrowDown } from "../../../../assets";
import { useRef, useState } from "react";

interface IMenuItemPopupProps {
  position?: "left" | "right";
  open?: boolean;
  onClick?: (target: any) => void;
  onClose?: () => void;
  className?: string;
  icon?: any;
  text?: string;
  children?: any;
}

const MenuItemPopover = ({
  position = "right",
  open = false,
  onClick,
  onClose,
  className,
  children,
  icon,
  text,
}: IMenuItemPopupProps) => {
  const ref = useRef<any>();
  const textRef = useRef<any>();
  return (
    <>
      <ListItem
        ref={ref}
        className={classNames(styles["container"], className)}
        onClick={() => onClick?.(textRef.current)}
      >
        {icon && <img className={styles["img-icon"]} src={icon} />}
        <Typography ref={textRef} className={styles["text"]}>
          {text}
        </Typography>
        {children && (
          <img
            className={styles["img-arrow"]}
            src={open ? IconArrowUp : IconArrowDown}
          />
        )}
      </ListItem>
      <Popover
        sx={{
          ".MuiPaper-root": {
            borderRadius: ".5rem",
            boxShadow: "0px 0px 20px rgb(0 ,0 ,0 ,0.15)",
          },
        }}
        anchorEl={ref.current}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: position,
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: position,
        }}
        style={{ transform: "translateY(50px)" }}
      >
        {children}
      </Popover>
    </>
  );
};

export { MenuItemPopover };
