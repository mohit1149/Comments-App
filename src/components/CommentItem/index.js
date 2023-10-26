// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    backgroundColor,
    toggleIsFavorite,
    toggleDelete,
  } = props
  const {yourName, yourComment, isFavorite, id, date} = commentDetails
  const likeImage = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isFavorite ? 'blue-color' : ''
  const firstLetter = yourName.slice(0, 1).toUpperCase()
  const dateTime = formatDistanceToNow(date)
  const onClickLikeButton = () => {
    toggleIsFavorite(id)
  }
  const onClickDeleteButton = () => {
    toggleDelete(id)
  }
  return (
    <li className="each-comment">
      <div className="bg-container">
        <h1 className="itemName">
          <span className={`span-text ${backgroundColor}`}>{firstLetter}</span>
          {yourName}
          <span className="date">{dateTime}</span>
        </h1>
        <p className="itemComment">{yourComment}</p>

        <div className="bottom-container">
          <div className="like-container">
            <button
              type="button"
              className="like-button"
              id="thumbs"
              onClick={onClickLikeButton}
            >
              <img src={likeImage} alt="like" className="thumbs" />
            </button>
            <label htmlFor="thumbs" className={`like ${likeColor}`}>
              Like
            </label>
          </div>
          <button
            type="button"
            className="like-button"
            onClick={onClickDeleteButton}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
        <hr className="horizontal-line" />
      </div>
    </li>
  )
}

export default CommentItem
