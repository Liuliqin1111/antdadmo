import React from 'react'
import ReactEcharts from 'echarts-for-react';
import {Card} from 'antd'
class Home extends React.Component{
  constructor(){
    super()
    this.state={
      option:{
        xAxis : [
          {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                  alignWithLabel: true
              }
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'直接访问',
              type:'bar',
              barWidth: '60%',
              data:[10, 52, 200, 334, 390, 330, 220]
          }
      ]
      }
      // option:{
      //   series : [
      //     {
      //         name: '访问来源',
      //         type: 'pie',
      //         radius : '55%',
      //         center: ['50%', '70%'],
      //         data:[
      //             {value:0, name:'直接访问'},
      //             {value:0, name:'邮件营销'},
      //             {value:0, name:'联盟广告'},
      //             {value:0, name:'视频广告'},
      //             {value:0, name:'搜索引擎'}
      //         ],
              
      //     }
      // ]
      // }
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      let data=[
        {value:335, name:'直接访问'},
        {value:310, name:'邮件营销'},
        {value:234, name:'联盟广告'},
        {value:135, name:'视频广告'},
        {value:1548, name:'搜索引擎'}
    ]
    let option=JSON.parse(JSON.stringify(this.state.option))
    option.series[0].data=data
    
    this.setState({option})
    },1000)
  }
  render(){
    return(
      <div>
        管理平台首页
        <Card>
           <ReactEcharts option={this.state.option} />
        </Card>
      </div>
    )
  }
}
export default Home