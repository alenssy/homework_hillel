import React from 'react'
import { Space } from 'antd'
import { LinkedinOutlined } from '@ant-design/icons'

class Footer extends React.Component {
  render() {
    return (
      <Space className="footer" align="center">
        <a href="https://www.linkedin.com/feed/">
          <LinkedinOutlined style={{ marginRight: '5px' }} />
          Follow us
        </a>
        <a href="tel:+0770879890">
          077-087-9890
        </a>
      </Space>
    )
  }
}

export default Footer