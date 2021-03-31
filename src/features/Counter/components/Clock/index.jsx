import useClock from 'hooks/useClock';
import React from 'react';

Clock.propTypes = {};

function Clock(props) {
  const { timeString } = useClock();

  return <div style={{ fontSize: '42px' }}>{timeString}</div>;
}

export default Clock;
