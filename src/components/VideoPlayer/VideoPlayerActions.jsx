import React from 'react'
import { Comments } from '../Icons/Comments'
import { Heart } from '../Icons/Heart'
import { Shared } from '../Icons/Shared'
import styles from './styles.module.css'

export const VideoPlayerActions = ({ likes, comments, shares }) => {
	return (
		<aside className={styles.actions}>
			<div className={styles.action}>
				<Heart />
				<div className="action-text">
					{likes}
				</div>
			</div>

			<div className={styles.action}>
				<Comments />
				<div className="action-text">
					{comments}
				</div>
			</div>

			<div className={styles.action}>
				<Shared />
				<div className="action-text">
					{shares}
				</div>
			</div>
		</aside>
	)
}
