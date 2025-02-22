import React, { useState } from 'react';
import { TabBar } from 'zarm';
// 有哪些类型
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CustomIcon from '@/components/Customicon';
 
const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState('/');
  const navigateTo = useNavigate()

  const changeTab = (path) => {
    // setActiveKey 是一个函数，用来设置 activeKey 的值
    setActiveKey(path)
    // navigateTo 是一个函数，用来跳转到指定的路径
    navigateTo(path)
  }

  return (
    <TabBar visible={showNav.toString()} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon = {
          <CustomIcon type="zhangdan" />
        }
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon = {
          <CustomIcon type="tongji" /> 
        }
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon = {
          <CustomIcon type="wode" /> 
        }
      />
    </TabBar>
  );
};
// vue defineProps 
// react 申明组件的类型
NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar;