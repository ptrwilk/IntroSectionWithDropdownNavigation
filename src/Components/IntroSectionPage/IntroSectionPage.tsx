import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";
import IconMenu from "../../assets/icon-menu.svg";
import ImageHeroMobile from "../../assets/image-hero-mobile.png";
import ImageHeroDesktop from "../../assets/image-hero-desktop.png";
import IconClientDatabliz from "../../assets/client-databiz.svg";
import IconClientAudiophile from "../../assets/client-audiophile.svg";
import IconClientMeet from "../../assets/client-meet.svg";
import IconClientMaker from "../../assets/client-maker.svg";
import { useRef, useState } from "react";
import MenuDrawer from "../Menu/MenuDrawer/MenuDrawer";
import HorizontalMenu from "../Menu/HorizontalMenu/HorizontalMenu";

const IntroSectionPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<any>();

  const isLarge = useMediaQuery("(min-width: 920px)");

  return (
    <Box className={styles["container"]}>
      {!isLarge && (
        <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
      <Box ref={headerRef} className={styles["header"]}>
        <img className={styles["img-logo"]} src={Logo} />
        {isLarge && <HorizontalMenu parentRef={headerRef} />}
        {!isLarge && (
          <IconButton
            className={styles["btn-menu"]}
            onClick={() => setMenuOpen(true)}
          >
            <img src={IconMenu} />
          </IconButton>
        )}
      </Box>
      <Box className={styles["content"]}>
        <img
          className={styles["img-hero"]}
          src={isLarge ? ImageHeroDesktop : ImageHeroMobile}
        />
        <Box className={styles["section"]}>
          <Typography className={styles["title"]} variant="h1">
            {isLarge ? (
              <>
                <span>Make</span>
                <br />
                <span>remote work</span>
              </>
            ) : (
              "Make remote work"
            )}
          </Typography>
          <Typography className={styles["text"]}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Typography>
          <Button className={styles["btn"]}>Learn more</Button>
          <List>
            <ListItem>
              <img src={IconClientDatabliz} />
            </ListItem>
            <ListItem>
              <img src={IconClientAudiophile} />
            </ListItem>
            <ListItem>
              <img src={IconClientMeet} />
            </ListItem>
            <ListItem>
              <img src={IconClientMaker} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSectionPage;
