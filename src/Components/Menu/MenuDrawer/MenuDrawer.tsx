import { Box, Button, Drawer, IconButton, List } from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";

import MenuItem from "../MenuItem/MenuItem";
import {
  IconCloseMenu,
  IconTodo,
  IconCalendar,
  IconReminders,
  IconPlanning,
} from "../../../assets";

interface IMenuProps {
  open?: boolean;
  onClose?: () => void;
}

const Menu = ({ open, onClose }: IMenuProps) => {
  return (
    <Drawer anchor="right" open={open}>
      <Box className={styles["container"]}>
        <IconButton className={styles["btn-close-menu"]} onClick={onClose}>
          <img src={IconCloseMenu} />
        </IconButton>
        <Box className={styles["menu"]}>
          <List>
            <MainMenuItem text="Features">
              <SubMenuItem icon={IconTodo} text="Todo List" />
              <SubMenuItem icon={IconCalendar} text="Calendar" />
              <SubMenuItem icon={IconReminders} text="Reminders" />
              <SubMenuItem icon={IconPlanning} text="Planning" />
            </MainMenuItem>
            <MainMenuItem text="Company">
              <SubMenuItem text="History" />
              <SubMenuItem text="Our Team" />
              <SubMenuItem text="Blog" />
            </MainMenuItem>
            <MainMenuItem text="Careers" />
            <MainMenuItem text="About" />
          </List>
          <Button className={classNames(styles["btn"], styles["btn-login"])}>
            Login
          </Button>
          <Box className={styles["btn-register-container"]}>
            <Button
              className={classNames(styles["btn"], styles["btn-register"])}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

const MainMenuItem = ({ text, children }: { text: string; children?: any }) => (
  <MenuItem className={styles["main-menu-item"]} text={text}>
    {children}
  </MenuItem>
);

const SubMenuItem = ({ text, icon }: { text: string; icon?: any }) => (
  <MenuItem className={styles["sub-menu-item"]} icon={icon} text={text} />
);

export default Menu;
