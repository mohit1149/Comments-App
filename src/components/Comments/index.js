import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialCommentList = []
const number = Math.ceil(Math.random() * 6)
const color = initialContainerBackgroundClassNames[number]

class Comments extends Component {
  state = {
    commentList: initialCommentList,
    yourName: '',
    yourComment: '',
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachCommentNo => {
        if (id === eachCommentNo.id) {
          return {...eachCommentNo, isFavorite: !eachCommentNo.isFavorite}
        }
        return eachCommentNo
      }),
    }))
  }

  toggleDelete = id => {
    const {commentList} = this.state
    const filteredCommentList = commentList.filter(
      eachCommentDetails => eachCommentDetails.id !== id,
    )
    this.setState({
      commentList: filteredCommentList,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {yourName, yourComment} = this.state
    const newComment = {
      id: uuidv4(),
      yourName,
      yourComment,
      isFavorite: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      yourName: '',
      yourComment: '',
    }))
  }

  onChangeName = event => {
    this.setState({yourName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({yourComment: event.target.value})
  }

  render() {
    const {yourName, yourComment, commentList} = this.state
    const numberOfComments = commentList.length
    return (
      <div className="bg-container">
        <h1 className="comment-heading">Comments</h1>
        <p className="paragraph">Say something about 4.0 technologies</p>
        <div className="background">
          <div className="left-container">
            <form className="from" onSubmit={this.onAddComment}>
              <input
                type="input"
                placeholder="Your Name"
                className="name"
                onChange={this.onChangeName}
                value={yourName}
              />
              <br />
              <textarea
                value={yourComment}
                rows="8"
                cols="55"
                placeholder="Your Comment"
                className="comment"
                onChange={this.onChangeComment}
              />

              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="right-image"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr className="horizontal" />
        <p className="comments">
          <span className="comment-paragraph">{numberOfComments}</span>Comments
        </p>

        <ul className="comment-table">
          <div>
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                backgroundColor={color}
                toggleIsFavorite={this.toggleIsFavorite}
                toggleDelete={this.toggleDelete}
              />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}
export default Comments
