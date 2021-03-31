import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Đô Trưởng',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/3/9/4/a394a671a306218d3e8308a086f1a729.jpg',
    },
    {
      id: 2,
      name: 'Đom Đóm',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/8/0/1/c/801c0a9f296fd140a40f94ba3eae5e35.jpg',
    },
    {
      id: 3,
      name: 'Hồng Trần Ngàn Vạn Xuân',
      thumbnailUrl:
        'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/e/8/d/8/e8d892ca3e4401e43e95645f4c9ad917.jpg',
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
