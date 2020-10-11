import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ title }) => {

  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const onLogout = () => {
    logout()
  }

  const classes = useStyles();

  const authLinks = (
    <Fragment>
      <p>Hello {user && user.name}</p>
      <Link to='/'><Button color="inherit">Home</Button></Link>
      <Link to='/about'><Button color="inherit">About</Button></Link>
      <Button onClick={onLogout} style={{color: 'white'}}><i className='fas fa-sign-out-alt'></i>Logout</Button>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <Link to='/login'><Button color="inherit">Login</Button></Link>
      <Link to='/register'><Button color="inherit">Register</Button></Link>
    </Fragment>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            { title }
          </Typography>
          { isAuthenticated ? authLinks : guestLinks }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "MERN Frontend Boilerplate"
}
export default Navbar