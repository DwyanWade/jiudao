import http from '../utils/http'

export default class Tap {
  constructor(journal){
    this.id = journal.id
    this.type = journal.type
  }
  getLikeInfo(){
    let url = `classic/${this.type}/${this.id}/favor`;
    return http.get(url)
  }
  like(){
    let url = `like`
    return http.post(url, {
      art_id: this.id,
      type: this.type
    })
  }
  cancelLike(){
    let url = `like/cancel`
    return http.post(url, {
      art_id: this.id,
      type: this.type
    })
  }
}