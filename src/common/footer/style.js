import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  bottom: -2px;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  box-shadow: 0px -2px 13px 0px 
		rgba(201, 201, 201, 0.2);
  a{
    display: block;
    width: 33.33%;
    text-decoration-line: none;
    color: #000;
    div{
      display: flex;
      flex-direction: column;
      justify-content:center;
      height: 50px;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
      span{
        font-size: 10px;
        color: #c7c7c7;
      }
      .activeTxt{
        color: #000;
      }
    }
  }
`