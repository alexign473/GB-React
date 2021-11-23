import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// 2. Подключить страницу профиля к redux.
import { useDispatch, useSelector } from 'react-redux';

// 3. Добавить на странице профиля чекбокс и сохранение его состояния в сторе.
export const ProfilePage = () => {
    const dispatch = useDispatch()
    const checked = useSelector(state => state.checked)

    const handleChange = (event) => {
        dispatch({ type: 'CHECK', payload: event.target.checked })
    };
    return (
        <div>
            <h1>Profile</h1>
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