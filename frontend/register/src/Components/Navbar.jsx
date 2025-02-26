import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>MyApp</Typography>
                <Button component={Link} to="/signup" variant="contained" sx={{ mx: 1 }}>
                    Signup
                </Button>
                <Button component={Link} to="/login" variant="contained" sx={{ mx: 1 }}>
                    Login
                </Button>
                <Button component={Link} to="/logout" variant="contained" sx={{ mx: 1 }}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
