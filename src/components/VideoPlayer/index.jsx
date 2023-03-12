import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { Heart } from '../Icons/Heart'
import styles from './styles.module.css'
import { VideoPlayerActions } from './VideoPlayerActions'

const SRC = 'src/assets/videos/ssstik.io_1677469693570.mp4'

export const VideoPlayer = (dataVideo) => {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  console.log(dataVideo)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing ? videoEl.pause() : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, {
    [styles.hidden]: playing
  })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={SRC}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions {...dataVideo} />
    </div>
  )
}
