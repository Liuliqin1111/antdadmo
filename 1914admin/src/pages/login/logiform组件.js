import React from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
// antd 的form组件

class Login extends React.Component{

  submit=()=>{
  // console.log(this.state)
  // let result=this.props.form.getFieldsValue()
  this.props.form.validateFields((err,userinfo)=>{
    // err验证是不是通过  通过 null 
    if(err){
      message.error('信息输入有误请重试')
    }else{
      message.success('登录成功,1后跳转首页')
    }
  })
  // getFieldsValue 获取双向绑定的数据

  }
  render(){
    console.log(this,'login')
     const { getFieldDecorator } = this.props.form;
    //  getFieldDecorator  表单组件获取数据的方法 也是一个高阶
    return(
      <div className="login-form">
        <Form.Item>
         {getFieldDecorator('userName',{
            rules: [{ required: true, message: 'Please input your username!' },
                     { min: 3, message: '用户名最下长度3位!' },
                    { max: 9, message: '用户名最大长度9位!' }],
         })(
            <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
         )}
           
       
        </Form.Item>
        <Form.Item>
         {getFieldDecorator('passWord',{})(
           <Input
           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
           placeholder="passWord"
         />
         )}
        </Form.Item>
        <button onClick={this.submit}> 提交</button>
      </div>
    )
  }
}
export default Form.create()(Login)