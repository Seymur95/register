import React from 'react'
import './style.css'
import { Button, Checkbox, Form, Input, Col, Layout, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../Components';
const { Content } = Layout;



const Index = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className='Layout'>
      <Header title='Login' />

      <Content className='Content'>
        <Row style={{height:'100%'}} align='middle' justify={'center'}>
          <Col span={6}></Col>

          <Col span={12}>
            <Form name="basic"
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 19,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Space size={50}>
                  <Button type="primary" htmlType="submit">
                    Sign In
                  </Button>
                  <Link to='/signup'><Button>Sign Up</Button></Link>
                </Space>
              </Form.Item>
            </Form>

          </Col>
          <Col span={6}></Col>
        </Row>
      </Content>
      
      <Footer title='Footer' />
    </Layout>
  )
}

export default Index