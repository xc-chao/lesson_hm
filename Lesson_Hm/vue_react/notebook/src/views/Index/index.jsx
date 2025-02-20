import React from 'react';
import s from './style.module.less'

// export default 是默认导出，只能有一个
export default function Index() {
    // return 是返回值，只能有一个
    // () 把内容包起来，把内容变成一个整体
    return (
        <div className={s.index}>
            <span>样式</span>
        </div>
    )
}