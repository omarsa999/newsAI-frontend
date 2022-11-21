import React from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./styles.css"

const SkalitonComp = () => {
  return (
    <div class="collumn">
      <div class="head">
        <span class="headline hl5">
          <Skeleton width={20} height={20} />
        </span>
        <p>
          <span class="headline hl6">
            <Skeleton width={20} height={20} />
          </span>
        </p>
      </div>
      <p>
        <Skeleton width={20} height={20} />
      </p>
      <figure class="figure">
        {/* <img class="media" src={post.thumb || <Skeleton />} alt="" /> */}
        <figcaption class="figcaption">
          all rights reserved to the respective owners
        </figcaption>
      </figure>

      <p>
        <Skeleton width={20} height={20} />
      </p>

      <p>
        <Skeleton width={20} height={20} />
      </p>
      <figcaption class="figcaption">
        <Skeleton width={20} height={20} />
      </figcaption>
    </div>
  )
}
export default SkalitonComp
