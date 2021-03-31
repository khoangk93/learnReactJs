import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import MagicBox from './components/MagicBox';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    console.log('action', action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    if (counter <= 0) return;
    const action = decrease(); // action creator
    console.log('action', action);
    dispatch(action);
  };

  return (
    <div className={styles.counter}>
      Counter: {counter}
      <Box my={2}>
        <MagicBox />
      </Box>
      <Box my={2}>
        <Clock />
        <BetterClock />
      </Box>
      <div>
        <Button className={classes.root} onClick={handleIncreaseClick}>
          Increase
        </Button>
        <Button classes={{ root: classes.root }} onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
