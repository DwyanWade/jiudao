import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { ListWrapper } from '../style'
import likeImg from '../../../static/great.png'
import { Link } from 'react-router-dom';

class List extends Component {
  render(){
    const { list } = this.props
    return (
      <ListWrapper>
        <img className='likeImg' src={likeImg} alt=""/>
        <div className='list'>
          {
            list.map((item) => {
              return (
                <Link key={item.id} to={'/detail/' + item.id}>
                  <div className='book'>
                    <img src={item.image} alt=""/>
                    <div className='bookDetail'>
                      <p className='title'>{item.title}</p>
                      <p className='author'>{item.author}</p>
                      <p className='favNums'>{item.fav_nums}喜欢</p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </ListWrapper>
    )
  }
  componentDidMount(){
    this.props.getBookList()
  }
}

const mapState = (state) => ({
  list: state.getIn(['book', 'list'])
})

const mapDispatch = (dispatch) => ({
  getBookList(){
    dispatch(actionCreators.getList())
  }
})

export default connect(mapState, mapDispatch)(List)