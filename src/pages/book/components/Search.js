import React, { Component } from 'react'
import {
  SearchWrapper
} from '../style'
import searchImg from '../../../static/search.png'

class Search extends Component {
  render(){
    return (
      <SearchWrapper>
        <div>
          <img src={searchImg} alt=""/>
          <span>搜索图书名</span>
        </div>
      </SearchWrapper>
    )
  }
}

export default Search