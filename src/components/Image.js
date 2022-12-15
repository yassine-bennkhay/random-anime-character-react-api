import React from 'react'

function Image(props) {

  return (
    <div className='image-container'>
   
        <img src={props.imgPath} alt="anime-img" />
        <p>Artist: {props.artist}</p>
      {
       props.artist=="unknown"?<p> No Profile Link</p>: <a href={props.profile}>Artist Profile</a>
      }
    </div>
  )
}

export default Image
