import useClock from 'hooks/useClock';
import useMagicColor from 'hooks/useMagic';
import React from 'react';

BetterClock.propTypes = {};

function BetterClock(props) {
  const { timeString } = useClock();
  const magicColor = useMagicColor();
  const textColor = '255,255,255';

  return (
    <div
      style={{
        fontSize: '42px',
        padding: '2rem',
        border: `1px solid rgb(${magicColor})`,
        borderRadius: '0.5rem',
        margin: '1rem 0',
        backgroundColor: `rgb(${magicColor})`,
        transition: '.5s',
        color: `rgba(${textColor},1)`,
      }}
    >
      {timeString}
    </div>
  );
}

export default BetterClock;
