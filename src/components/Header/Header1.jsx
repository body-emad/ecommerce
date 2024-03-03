import React from "react";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const options = ["Ar", "En"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#985fa0",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,

              pr: " 15px",
              pl: "15px",
              bgcolor: "#ca357e",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "12px",
              color: "#fff",
            }}
          >
            HOT
          </Typography>
          <Typography
            sx={{
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  sx={{
                    color: "#fff",
                    fontSize: "19px",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined fontSize="small" />
              </IconButton>
            )}
          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              sx={{ "&:hover": { cursor: "pointer" } }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "14px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore
                sx={{
                  color: "#fff",
                  fontSize: "meduim",
                }}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "14px",
                  padding: "3px 10px",
                  minHeight: "14px",
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <FacebookOutlinedIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
          <TwitterIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
