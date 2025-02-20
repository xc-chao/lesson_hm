import { useEffect } from "react"
import { useParams } from "react-router-dom"
const PostShow = () => {
    const { postid } = useParams()
    console.log(postid)
    useEffect(() => {
       document.title = `post-${postid}` 
    },[])
    return (
        <div>
            <h1>postShow</h1>
        </div>
    )
}
export default PostShow