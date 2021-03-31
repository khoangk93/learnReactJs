import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string,
};

Album.defaultProps = {
  thumbnail: '',
  name: '',
};

function Album(props) {
  const { thumbnail, name } = props;

  return (
    <div className='album'>
      <img src={thumbnail} alt={name} />
      <h5>{name}</h5>
    </div>
  );
}

export default Album;
