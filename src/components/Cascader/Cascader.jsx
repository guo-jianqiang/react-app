import React, { Component } from 'react'
import cs from 'classnames'
import './style.scss'

class Cascader extends Component {
  static defaultProps = {
    tree: []
  }

  constructor (props, context) {
    super(props, context)
    this.state = {
      parentCurrentId: undefined,
      childrenCurrentId: undefined,
      childrenArr: []
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.tree !== this.props.tree) {
      this.setState({parentCurrentId: undefined, childrenCurrentId: undefined})
    }
  }

  handleClickParent = item => {
    let childrenArr = []
    childrenArr.push(item?.children || [])
    this.setState({parentCurrentId: item.id, childrenCurrentId: undefined, childrenArr})
    typeof this.props.handleClickLeft === 'function' && this.props.handleClickLeft(item)
  }

  handleClickChild = (item, index) => {
    let childrenArr = [...this.state.childrenArr]
    if (index !== childrenArr.length - 1) {
      childrenArr.pop()
    }
    item?.children && childrenArr.push(item?.children)
    this.setState({childrenCurrentId: item.id, childrenArr})
    typeof this.props.handleClickRight === 'function' && this.props.handleClickRight(item)
  }

  render () {
    const {tree} = this.props
    return (
      <div className='cascader'>
        <div className='cascader-list'>
          {
            tree.map(item => (
              <div
                key={item.id}
                className={cs('cascader-list-item', {
                  'cascader-list-active': item.id === this.state.parentCurrentId
                })}
                onClick={() => {
                  this.handleClickParent(item)
                }}
              >{item.text}</div>
            ))
          }
        </div>
        {
          this.state.childrenArr.map((item, index) => (

            <div className='cascader-list' key={index}>
              {
                item.length ? item.map(item => (
                  <div
                    key={item.id}
                    className={cs('cascader-list-item', {
                      // 'cascader-list-active': item.id === this.state.childrenCurrentId
                    })}
                    onClick={() => {
                      this.handleClickChild(item, index)
                    }}
                  >
                    {item.text}
                  </div>
                )) : null
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default Cascader