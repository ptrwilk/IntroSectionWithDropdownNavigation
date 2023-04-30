import { Box, Button, List } from "@mui/material";
import styles from "./styles.module.css";
import MenuItem from "../MenuItem/MenuItem";
import { MenuItemPopover } from "../MenuItem";
import {
  IconCalendar,
  IconPlanning,
  IconReminders,
  IconTodo,
} from "../../../assets";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

interface IHorizontalMenuProps {
  parentRef?: any;
}

const HorizontalMenu = ({ parentRef }: IHorizontalMenuProps) => {
  const [openMenu, setOpenMenu] = useState<"features" | "company" | undefined>(
    undefined
  );

  const currentTargetRef = useRef<any>();

  const handleParentClick = (e: any) => {
    if (e.target.localName === "div" && e.target !== currentTargetRef.current) {
      closePopover();
    }
  };

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.addEventListener("click", handleParentClick);
    }

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener("click", closePopover);
      }
    };
  }, [parentRef]);

  const handleClick = (target: any, type: "features" | "company") => {
    if (openMenu == type) {
      setOpenMenu(undefined);
    } else {
      setOpenMenu(type);
    }
    currentTargetRef.current = target;
  };

  const closePopover = () => setOpenMenu(undefined);

  return (
    <Box className={styles["container"]}>
      <List>
        <MenuItemPopover
          open={openMenu === "features"}
          onClick={(target: any) => handleClick(target, "features")}
          onClose={closePopover}
          text="Features"
        >
          <Box className={styles["popover"]}>
            <MenuItem
              className={styles["menu-item"]}
              text="Todo List"
              icon={IconTodo}
            />
            <MenuItem
              className={styles["menu-item"]}
              text="Calendar"
              icon={IconCalendar}
            />
            <MenuItem
              className={styles["menu-item"]}
              text="Reminders"
              icon={IconReminders}
            />
            <MenuItem
              className={styles["menu-item"]}
              text="Planning"
              icon={IconPlanning}
            />
          </Box>
        </MenuItemPopover>
        <MenuItemPopover
          position="left"
          open={openMenu === "company"}
          onClick={(target: any) => handleClick(target, "company")}
          onClose={closePopover}
          text="Company"
        >
          <Box className={styles["popover"]}>
            <MenuItem className={styles["menu-item"]} text="History" />
            <MenuItem className={styles["menu-item"]} text="Our Team" />
            <MenuItem className={styles["menu-item"]} text="Blog" />
          </Box>
        </MenuItemPopover>
        <MenuItemPopover text="Careers" onClick={closePopover} />
        <MenuItemPopover text="About" onClick={closePopover} />
      </List>
      <Button
        className={classNames(styles["btn"], styles["btn-login"])}
        onClick={closePopover}
      >
        Login
      </Button>
      <Button
        className={classNames(styles["btn"], styles["btn-register"])}
        onClick={closePopover}
      >
        Register
      </Button>
    </Box>
  );
};

export default HorizontalMenu;
