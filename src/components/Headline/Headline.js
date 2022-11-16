import React from "react"
import "./styles.css"
import { useSelector } from "react-redux"
import moment from "moment"
import Template1 from "./Template1"
import Template2 from "./Template2"

const Headline = () => {
  const posts = useSelector((state) => state.posts)
  // posts = posts.filter((item) => item.postBody != "")
  console.log(posts)
  return (
    <div>
      {posts
        .filter((a) => a.postBody.length != 0)
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .map((post, index) =>
          index % 2 ? <Template2 post={post} /> : <Template1 post={post} />
        )}
    </div>
  )
}
export default Headline
