import React from 'react'
import { fetchPosts } from '../api/fetchPosts'
import { Card, Input } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const { Meta } = Card;

class Posts extends React.Component {
  state = {
    posts: null,
    isEditingTitle: false,
  }

  componentDidMount() {
    fetchPosts()
      .then(data => this.setState({ posts: data }))
  }

  editHandler = (id) => {
    this.setState({ isEditingTitle: this.state.isEditingTitle ? false : id })
  }

  editTitle = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.isEditingTitle}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: e.target.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    let posts = this.state.posts.map(post => {
      if (this.state.isEditingTitle === post.id) {
        return { ...post, title: e.target.value }
      }
      return post 
    })

    this.setState({ ...this.state, posts })
  }

  deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    let posts = this.state.posts.filter(post => post.id !== id)

    this.setState({ ...this.state, posts })
  }

  render() {
    const { posts, isEditingTitle } = this.state
    return (
      <div className="posts__container">
        {posts && posts.map(post => (
          <Card
            style={{ width: '23.8%', margin: '0.6%' }}
            key={post.id}
            actions={[
              <DeleteOutlined key="setting" onClick={() => this.deletePost(post.id)} />,
              <EditOutlined key="edit" onClick={() => this.editTitle(post.id)} />,
            ]}
          >
            <Meta
              title={isEditingTitle === post.id ? (<Input value={post.title} onChange={this.editTitle} />) : post.title}
              description={post.body}
            />
          </Card>
        ))}
      </div>
    )
  }
}

export default Posts