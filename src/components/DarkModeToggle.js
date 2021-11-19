import React from "react";
import { Switch, FormControlLabel } from '@mui/material';

export default function DarkModeToggle({
    toggleDark, settoggleDark }) {
    const handleModeChange = () => {
        settoggleDark(!toggleDark);
    };
    return (
        <div>
            <FormControlLabel control={
                <Switch
                    checked={toggleDark}
                    onChange={handleModeChange}
                    name="toggleDark"
                    color="default"
                />} label="Dark mode" />
        </div>
    )
}
