import { Route } from "react-router-dom"
import PostIndex from "./post-Index"
import PostShow from "./post-Show"

export const postRouters = (
    <>
        <Route path='post' element={<PostIndex />} />
        <Route path='post/:postid' element={<PostShow />} />
    </>
)