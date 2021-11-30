import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DarkModeToggle from '../components/DarkModeToggle'

import { useDispatch, useSelector } from 'react-redux';
import { checkboxToggled } from '../store/profile/profileSlice'

export const ProfilePage = () => {
    const dispatch = useDispatch()
    const checked = useSelector(state => state.profile.checked)

    const handleChange = (e) => {
        dispatch(checkboxToggled(e.target.checked))
    };
    return (
        <div>
            <h1>Profile</h1>
            <DarkModeToggle />
            <p>Checked: {checked.toString()}</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox
                    checked={checked}
                    onChange={handleChange}
                />} label='Label' />
            </FormGroup>
        </div>
    );
};