const dateHandle = (data) => {
  const date = data.pubdate
  const year = date.substring(0, 4)
  let month = date.substring(5, 7)
  data['year'] = year
  switch(month){
    case '01':
      month = '一月'
      break
    case '02':
      month = '二月'
      break
    case '03':
      month = '三月'
      break
    case '04':
      month = '四月'
      break
    case '05':
      month = '五月'
      break
    case '06':
      month = '六月'
      break
    case '07':
      month = '七月'
      break
    case '08':
      month = '八月'
      break
    case '09':
      month = '九月'
      break
    case '10':
      month = '十月'
      break
    case '11':
      month = '十一月'
      break
    case '12':
      month = '十二月'
      break
    default:
      month = '不详'
  }
  data['month'] = month
}

const setStorageHandle = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

const getStorageHandle = (key) => {
  let value = sessionStorage.getItem(key)
  return JSON.parse(value)
}

const showToast = (content='showTaost', duration=2000) => {
  let parentDiv = document.createElement('div')
  parentDiv.style.position = 'absolute'
  parentDiv.style.left = 0
  parentDiv.style.top = 0
  parentDiv.style.bottom = 0
  parentDiv.style.right = 0
  parentDiv.style.zIndex = 2000
  parentDiv.style.display = 'flex'
  parentDiv.style.justifyContent = 'center'
  parentDiv.style.alignItems = 'center'
  let div = document.createElement('div')
  div.style.height = '40px'
  div.style.width = '40vw'
  div.style.textAlign = 'center'
  div.style.borderRadius = '8px'
  div.style.paddingLeft = '10px'
  div.style.paddingRight = '10px'
  div.style.lineHeight = '40px'
  div.innerText = content
  div.style.color = '#fff'
  div.style.background = '#000'
  div.style.opacity = 0.61
  parentDiv.appendChild(div)
  document.body.appendChild(parentDiv)
  setTimeout(() => {
    document.body.removeChild(parentDiv)
  }, duration)
}

const showLoading = () => {
  let container = document.createElement('div')
  container.id = 'showLoading'
  container.style.width = '100vw'
  container.style.height = '100vh'
  container.style.position = 'fixed'
  container.style.top = 0
  container.style.left = 0
  container.style.bottom = 0
  container.style.right = 0
  container.style.zIndex = 2000
  container.style.background = '#fff'
  container.style.display = 'flex'
  container.style.justifyContent = 'center'
  container.style.alignItems = 'center'

  let loadBox = document.createElement('div')
  loadBox.style.display = 'flex'
  loadBox.style.justifyContent = 'center'
  loadBox.style.width = '150px'
  loadBox.style.height = '15px'
  loadBox.style.margin = '0 auto'

  for(let i=0; i < 5; i++){
    let span = document.createElement('span')
    span.style.display = 'inline-block'
    span.style.width = '15px'
    span.style.height = '100%'
    span.style.marginRight = '5px'
    span.style.borderRadius = '50%'
    span.style.background = '#FF7F00'
    span.animate([
      {opacity: 0},
      {opacity: 1, offset: 0},
      {opacity: 0}
    ], {
      duration: 1040,
      iterations: Infinity,
      delay: i * 130,
    })
    loadBox.appendChild(span)
  }
  
  container.appendChild(loadBox)
  document.body.appendChild(container)
}

const hideLoading = () => {
  let loading = document.getElementById('showLoading')
  document.body.removeChild(loading);
}

const transition = (imgId) => {
  showLoading()
  let img = document.getElementById(imgId)
  img.onload = function() {
    hideLoading()
  }
}

export { 
  dateHandle, 
  setStorageHandle, 
  getStorageHandle, 
  showToast, 
  showLoading, 
  hideLoading,
  transition
}