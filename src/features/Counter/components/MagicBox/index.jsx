import useMagicColor from 'hooks/useMagic';
import React from 'react';

function MagicBox(props) {
  const color = useMagicColor();

  return <div style={{ color }}>Magic Box</div>;
}

export default MagicBox;
