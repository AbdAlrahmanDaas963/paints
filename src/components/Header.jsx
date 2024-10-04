import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import PaletteIcon from "@mui/icons-material/Palette";
import { useTheme } from "@mui/material/styles";

const pages = ["Home", "About", "Events", "Contact"];

function ResponsiveAppBar() {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: theme.palette.white.main }}>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              gap: "2px",
              justifyContent: { xs: "flex-start", md: "flex-start" },
              order: { xs: 1, md: 1 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: { xs: "none", md: "block" },
                  color: theme.palette.black.main,
                }}
              >
                {page}
              </Button>
            ))}

            <IconButton
              size="large"
              aria-label="open navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: theme.palette.black.main,
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: theme.palette.text.primary,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              order: { xs: 2, md: 2 },
            }}
          >
            <PaletteIcon
              htmlColor={theme.palette.orange.main}
              sx={{ display: "flex", mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.palette.orange.main,
                textDecoration: "none",
                ...theme.typography.kalam,
                fontSize: "25px",
              }}
            >
              Paint
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              order: { xs: 3, md: 3 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.black.main,
                cursor: "pointer",
                alignSelf: "center",
                marginRight: "16px",
                textDecoration: "underline",
              }}
              onClick={() => {
                console.log("Translation Button Clicked");
              }}
            >
              العربية
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
