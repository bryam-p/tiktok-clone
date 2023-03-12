import React from 'react'
import { VideoPlayer } from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/f96817f316ac46dd995176be6238be7e~c5_100x100.jpeg',
    author: 'bryamp',
    comments: 333,
    description: "Don't be silent #🥺 #🎬 #movie #fpy #film",
    likes: 678,
    shares: 234,
    songTitle: 'sonido original- bryamp',
    src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oQyGiZoIh3zAAkcfwjADMyDQAqsgICAjET0VNq~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1678608000&x-signature=chNGqRNvdrsZKIgoiF8GvMeh1c8%3D',
  },
  {
    id: 2,
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d58059cb2cbab7b7000e2176fe3c30b7~c5_100x100.jpeg?x-expires=1678759200&x-signature=ERzlSx%2Fjlfj0joM5MDIBeYJTP%2BM%3D',
    author: '@eldiamanteoficial',
    comments: 127,
    description: 'más Joven recompensa a persona que acepte trabajar por poco dinero 😱❤️ gracias a @Fabio Paredes 🙏🏾🎁 #viral #reto',
    likes: 323,
    shares: 777,
    songTitle: 'sonido original- El diamante',
    src: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/o8IUQBBoRcUCAFnkaeY5bWImKkGE9D5QJnjsBe~tplv-f5insbecw7-1:720:720.jpeg?x-expires=1678608000&x-signature=nD6A5jYHFPeHV8p2WazEVB4WiaY%3D'
  }
]

export const FeedVideos = () => {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
