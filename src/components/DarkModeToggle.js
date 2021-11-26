import React from "react";
import { Switch, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { themeToggled } from '../features/theme/themeSlice'

export default function DarkModeToggle() {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.theme.darkMode)
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
