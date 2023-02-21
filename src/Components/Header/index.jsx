import { Button, Space } from 'antd'
import './style.css'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import { Logo } from '../../Assets/images'


const Index = ({title}) => {
  return (
    <Header className='Header'>
        <img src={Logo} alt="logo" />
        <h3 style={{color:'white'}}>{title}</h3>
       <Space className='space' size={'large'}>
            <Button style={{marginTop:17}} href='https://www.facebook.com' target='_blank' type='ghost' icon={<FaFacebook size={30}  />} />
            <Button style={{marginTop:17}} href='https://www.instagram.com' target='_blank' type='ghost' icon={<ImLocation2 size={30} />} />
            <Button style={{marginTop:17}} href='https://www.linkedin.com' target='_blank' type='ghost' icon={<BsLinkedin size={30} />} />
       </Space>
    </Header>
  )
}

export default Index
