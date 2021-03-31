import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import classnames from 'classnames';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

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

  link: {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: theme.spacing(1),

    '&$linkActive': {
      color: '#000',
    },
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  linkActive: {},
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = loggedInUser?.id;

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    const action = logout();

    dispatch(action);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon />

          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Shop
            </Link>
          </Typography>

          <NavLink to="/" className={classnames(classes.link)} activeClassName={classes.linkActive} exact>
            <Button color="inherit">Home Page</Button>
          </NavLink>

          <NavLink to="/todos" className={classes.link} activeClassName={classes.linkActive} exact>
            <Button color="inherit">Todos</Button>
          </NavLink>

          <NavLink to="/albums" className={classes.link} activeClassName={classes.linkActive} exact>
            <Button color="inherit">Albums</Button>
          </NavLink>

          {!isLoggedIn && (
            <Button onClick={handleClickOpen} color="inherit" size="large">
              Login
            </Button>
          )}

          {isLoggedIn && (
            <IconButton onClick={handleUserClick}>
              <AccountCircle color="inherit" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <IconButton onClick={handleClose} className={classes.closeButton}>
          <Close />
        </IconButton>

        <DialogContent>
          {mode === MODE.REGISTER ? (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                >
                  Already have an account. Login Here
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                >
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
