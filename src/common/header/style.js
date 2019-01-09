import styled from 'styled-components'
import backBtn from '../../static/back.png'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 1rem;
  align-items: center;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

export const Back = styled.span`
  display: block;
  position: absolute;
  width: 10px;
  height: 17px;
  left: 10px;
  background: url(${backBtn});
  background-size: contain;
  line-height: 80px;
`

export const Title = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  line-height: 40px;
  font-family: PingFang-SC-Bold;
`