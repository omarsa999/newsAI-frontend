import React from "react"
import "./styles.css"
import moment from "moment"

const Template2 = ({ post }) => {
  const paragraph1 = post.postBody.split(".")

  return (
    <div class="collumn">
      <div class="head">
        <span class="headline hl3">{post.title}</span>
        <p>
          <span class="headline hl4">
            {moment(post.createdAt).fromNow()} - {post.author}
          </span>
        </p>
      </div>
      {post.postBody}
      <p>
        {/* another */}
        {post.media}
      </p>
      <figure class="figure">
        <img class="media" src={post.thumb} alt="" />
        <figcaption class="figcaption">
          <a href={post.link}>[Read More...]</a>
        </figcaption>
      </figure>
    </div>
  )
}
export default Template2
