import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul className='albumList'>
      {albumList.map((album) => (
        <li key={album.id}>
          <Album thumbnail={album.thumbnailUrl} name={album.name} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
