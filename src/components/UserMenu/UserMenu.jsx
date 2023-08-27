import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, {user.name}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </p>

      <Link to='/profile'>Watch Profile</Link>

      <Button
        type="button"
        onClick={handleLogOut}
        variant="contained"
        color="success"
      >
        Logout
      </Button>
    </div>
  );
};
