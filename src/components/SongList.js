import React from 'react';

const SongList = (props) => {

  const songs = props.songs.map(song => {
    return <p>{song['im:name']}</p>
  })

  return(
    <article>
      {console.log(songs[0])}
    </article>
  );
}

export default SongList;
