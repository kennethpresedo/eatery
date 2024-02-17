import React from 'react'
import video from '/Users/kennethpresedo/Desktop/post-grad/eatery/src/assets/video.mp4'

function Home() {
  return (
    <div>Home


      <video width="max-width" height="700" playing={true} controls >
      <source src={video} type="video/mp4"/>
     </video>
    </div>
  )
}

export default Home