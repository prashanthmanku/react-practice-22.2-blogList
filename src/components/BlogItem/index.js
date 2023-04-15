// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {description, publishedDate, title} = blogDetails
  //   const itemClassName=count
  return (
    <li className="blog-item-container">
      <div className="heading-container">
        <h1 className="post-heading">{title}</h1>
        <p className="post-time">{publishedDate}</p>
      </div>
      <p className="post-description">{description}</p>
    </li>
  )
}
export default BlogItem
