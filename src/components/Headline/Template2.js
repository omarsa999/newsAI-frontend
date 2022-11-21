import React from "react"
import "./styles.css"
import moment from "moment"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const Template2 = ({ post }) => {
  const paragraph1 = post.postBody.split(".")

  return (
    <div class="collumn">
      <div class="head">
        <span class="headline hl3">{post.title || <Skeleton count={2} />}</span>
        <p>
          <span class="headline hl4">
            {moment(post.createdAt).fromNow()} - {post.author || <Skeleton />}
          </span>
        </p>
      </div>
      {post.postBody || <Skeleton count={5} />}
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
