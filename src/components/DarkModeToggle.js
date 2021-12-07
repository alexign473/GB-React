import React from "react";
import { Switch, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { themeToggled, selectTheme } from '../store/theme/themeSlice'

export default function DarkModeToggle() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectTheme)
    const handleModeChange = () => {
        dispatch(themeToggled())
    };
    return (
        <FormControlLabel control={
            <Switch
                checked={darkMode}
                onChange={handleModeChange}
                name="toggleDark"
                color="default"
            />} label="Dark mode" />
    )
}
