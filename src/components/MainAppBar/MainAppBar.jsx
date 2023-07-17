import {
  Link,
  AppBar,
  Toolbar,
} from '@mui/material';
import imgSrc from "images/contacts.png";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import PageBarMenu from '../PageBarMenu';
import UserBarMenu from '../UserBarMenu';

export default function MainAppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/" underline="none" mr="auto">
          <img src={imgSrc} style={{maxHeight:'45px'}} alt="phone book"/>
        </Link>

        {isLoggedIn ? (
          <UserBarMenu/>
        )
        : (
          <PageBarMenu/>
        )}
      </Toolbar>
    </AppBar>
  );
}