import Loadable from 'react-loadable'
import React from 'react'
const loadingComponent=()=>{
  return(
    <div>
      这里是过场组件
    </div>
  )
}
export default Loadable({
  loader:()=>import('./admin.js'), //需要异步加载的组件
  loading:loadingComponent  //等在过程中显示的过场组件
});