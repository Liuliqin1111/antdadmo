import React,{Component} from 'react'
import { Card ,Button, message} from 'antd'

class FoodAdd extends Component{
   constructor(){
      super()
  
   }
  submit=()=>{
   let file=this.refs.file.files[0]
   console.log(file)

   let formData= new FormData()
   formData.append('hehe',file)


   let config = {
      headers:{'Content-Type':'multipart/form-data'}
   };

   this.$axios.post('/hehe/admin/file/img',formData,config)
   .then((res)=>{
      console.log(res)
   })
  }
  render(){
    return(
      <Card title=''>
          <span>缩略图:</span><input type="file" ref='file'/><br/> 
          <Button type='primay' onClick={this.submit}>提交</Button>
      </Card>
    )
  }
}
export default  FoodAdd