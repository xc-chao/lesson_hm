import React,{ 
    useState, 
    useRef, // dom 或对象 ref
    useCallback, // 函数
    useEffect, // 副作用
} from'react';
import {
    Cell,
    Button,
    Input,
    Checkbox,
    Toast,
} from 'zarm'
import s from './style.module.less';
import cx from 'classnames';
import CustomIcon from '@/components/Customicon';

export default function Login() {
    const [type, setType] = useState('login')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        document.title = '登录'
    },[])
    const onsubmit = () => {
        if(type == 'login'){
            Toast.show('登录')
        }else{
            Toast.show('注册')
        }
    }
    return (
        <div className={s.auth}>
        <div className={s.head}></div>
            <div className={s.tab}>
                <span className={cx({ [s.active] : type == 'login'})} onClick={() => setType('login')}>登录</span>
                <span className={cx({ [s.active ] : type == 'register'})} onClick={() => setType('register')}>注册</span>
            </div>
            <div className={s.form}>
                <Cell icon={<CustomIcon type="zhanghao"/>}>
                    <Input 
                        clearable
                        type="text"
                        placeholder="请输入账号"
                        onChange={(value) => setUsername(value)}                    
                    />
                </Cell>
                <Cell icon={<CustomIcon type="zhanghao"/>}>
                    <Input 
                        clearable
                        type="password"
                        placeholder="请输入密码"
                        onChange={(value) => setPassword(value)}                    
                    />
                </Cell>
                {
                    type == 'register'?(<Cell icon={<CustomIcon type="mima"/>}>
                    <Input 
                        clearable
                        type="password"
                        placeholder="请输入重复密码"
                        onChange={(value) => setPassword(value)}                    
                    />    
                    </Cell>):null
                }
                <div className={s.operation}>
                    {
                        type =='register'?(<div className={s.agree}>
                            <Checkbox />
                            <label className="text-light">阅读并同意<a>《使用条款》</a></label>
                        </div>):null
                    }
                    <Button onClick={onsubmit} block theme='primary'>{type=='login'?"登录":"注册"}</Button>
                </div>
            </div>
        </div>
    )
}