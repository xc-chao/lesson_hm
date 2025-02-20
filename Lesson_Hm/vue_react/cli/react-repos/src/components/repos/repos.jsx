import {useState} from 'react'
import './repos.css'
function Repos(){
    // const repos = [
    //     {
    //         id:1,
    //         name:'Lesson_hm'
    //     },
    //     {
    //         id:2,
    //         name:'algo-hello'
    //     },
    //     {
    //         id:3,
    //         name:'prompt'
    //     }
    // ]
    // vue template 语法
    // js 区域
    // 使用一个响应式数据状态
    // 返回数组 解构，数组的第一项是当前的状态，数组的第二项是修改状态的方法
    const [repos,setRepos] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('https://api.github.com/users/xc-chao/repos')
        .then(res =>res.json())
        .then(data =>{
            // console.log(data)
            setLoading(false)
            setRepos(data)
        })
    return(
        // html？ react 发明了 JSX 语法 js 写html
        // JS
        <div className= "github-repos">
            <h2>Github Repositories</h2>
            {
                loading && <p>Loading...</p>
            }
            <ul>
                {
                    repos.map(repo =>(
                        <li key={repo.id}>
                            <a href="{repo.html_url">{repo.name}</a>
                            <span>作者：{repo.owner.login}</span>
                        </li>
                    ))
                }
            </ul>
            {!loading && repos.length === 0 && <p>暂无仓库</p>}
        </div>
    )
}
export default Repos