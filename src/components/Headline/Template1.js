import React from "react"
import "./styles.css"
import moment from "moment"

const Template1 = ({ post }) => {
  const paragraph1 = post.postBody.split(".")

  return (
    <div class="collumn">
      <div class="head">
        <span class="headline hl5">{post.title}</span>
        <p>
          <span class="headline hl6">
            {moment(post.createdAt).fromNow()} - {post.author}
          </span>
        </p>
      </div>
      <p>{post.postBody}</p>
      <figure class="figure">
        <img class="media" src={post.thumb} alt="" />
        <figcaption class="figcaption">
          all rights reserved to the respective owners
        </figcaption>
      </figure>

      <p>{paragraph1.slice(0, 1)}</p>

      <p>{paragraph1.slice(1)}</p>
      <figcaption class="figcaption">
        <a href={post.link}>[Read More...]</a>
      </figcaption>
    </div>
  )
}
export default Template1
