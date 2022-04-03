import {Link} from "react-router-dom";
import styles from './Header.module.scss';
import {connect} from "react-redux";
import CurrentLocationContainer from "../currentLocation/CurrentLocationContainer";
import { logInUser, logOutUser } from "../../redux/user/userActions";
import { useLocation, useNavigate } from "react-router-dom";


const Header = ({ user, logIn, logOut }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogIn = () => {
    logIn();
    navigate('/user')
  }

  const handleLogOut = () => {
    logOut();

    if (pathname === '/user') {
      navigate('/');
    }
  }

  return (
    <header className={styles.root}>
      <div className={styles.homeWrapper}>
        <Link className={styles.link} to='/'>Home</Link>
        <CurrentLocationContainer/>
      </div>
      <nav className={styles.nav}>
        {user && user?.isLogged ? (
          <>
            <Link className={styles.link} to='/user'>{`${user.name} ${user.surname}`}</Link>
            <button
              onClick={() => handleLogOut()}
              className={styles.logInOutButton}
            >
              Log out
            </button>
          </>
        ) : (
          <button
            onClick={() => handleLogIn()}
            className={styles.logInOutButton}
          >
            Log in
          </button>
        )}
      </nav>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    city: state.city,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => dispatch(logInUser()),
    logOut: () => dispatch(logOutUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);