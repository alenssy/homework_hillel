import React from 'react'
import {  PageHeader, Button } from 'antd'

class Header extends React.Component {
  
  render(){
    return (
      <PageHeader
        className="site-page-header"
        title="Hello world"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Home</Button>,
          <Button key="2">About</Button>,
          <Button key="1" type="primary">
            Log In
          </Button>
        ]}
      />
    )
  }
}

export default Header