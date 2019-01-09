import styled from 'styled-components';

export const SearchWrapper = styled.div`
  background: #fff;
  position: fixed;
  z-index: 99;
  top: 50px;
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  div{
    margin: 0 auto;
    width: 92%;
    height: 34px;
    background: #f7f7f7;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 14px;
      height: 14px;
    }
    span{
      color: #999999;
      font-size: 14px;
      margin-left: 6px;
    }
  }
`

export const ListWrapper = styled.div`
  background: #f7f7f7;
  margin-top: 114px;
  padding-top: 20px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .likeImg{
    width: 54px;
    height: 16px;
    position: relative;
    right: 6px;
  }
  .list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -11px;
    width: 76%;
    a{
      &:nth-child(2n){
          margin-left: 44px;
      }
      .book{
        margin-top: 27px;
        position: relative;
        img{
          width: 120px;
          height: 180px;
        }
        .bookDetail{
          position: absolute;
          background: #fff;
          height: 60px;
          width: 120px;
          padding-left: 13px;
          padding-right: 10px;
          box-sizing: border-box;
          bottom: 0;
          .title{
            margin-top: 6px;
            font-size: 12px;
            color: #1f1f1f;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; 
          }
          .author{
            font-size: 10px;
            color: #999999;
            margin-top: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .favNums{
            font-size: 10px;
            color: #999999;
            position: absolute;
            right: 6px;
            bottom: 10px;
          }
        }
      }
    }
  }
`