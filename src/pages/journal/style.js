import styled from 'styled-components';

export const JournalTopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 10px;
  margin-top: 50px;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  .index{
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .num{
    font-size: 16px;
  }
  .number{
    font-size: 28px;
    font-weight: bold;
  }
  .date{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    border-left: solid 1px #000000;
    margin-left: 8px;
    padding-left: 8px;
    text-align: center;
  }
`

export const TapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  img{
    display: block;
    width: 16px;
    height: 14px;
  }
  span{
    font-size: 9px;
    color: #bbbbbb;
    vertical-align: text-top;
    position: relative;
    bottom: 4px;
  }
`

export const MainImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 250px;
  align-items: center;
  img{
    width: 100vw;
    height: 250px;
  }
  .musicImg{
    width: 221px;
    border-radius: 100%;
    height: 212px;
  }
  .playMusicBtn{
    position: absolute;
    width: 78px;
    height: 78px;
  }
`

export const TypeImgWrapper = styled.div`
  position: relative;
  width: 23px;
  bottom: 32px;
  left: 15px;
  img{
    width: 23px;
    height: 73px;
  }
`

export const ContentWrapper = styled.div`
  width: 75%;
  font-size: 17px;
  color: #0f0f0f;
  font-family: PingFang-SC-Regular;
  margin: 0 auto;
  line-height: 30px;
  display: flex;
  justify-content: center;
  height: 30px;
`

export const TitleWrapper = styled.div`
  width: 75%;
  height: 40px;
  line-height: 40px;
  align-items: center;
  background: #f7f7f7;
  margin: 80px auto 0;
  display: flex;
  justify-content: space-between;
  .tapBtn{
    width: 14%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 11px;
    height: 17px;
  }
  span{
    font-size: 12px;
  }
`