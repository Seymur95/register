import React from 'react'
import './style.css'
import { Footer } from 'antd/es/layout/layout'


const Index = ({title}) => {
  return (
    <Footer className='Footer'>
        <h3 style={{color:'white'}}>{title}</h3>
    </Footer>
  )
}

export default Index
