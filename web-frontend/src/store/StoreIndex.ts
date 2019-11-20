import { toJS } from 'mobx'
import MediaWindowManagement from './MediaWindowManagement'

export default class StoreIndex {
  private mediaWindowManagement: object

  constructor() {
    this.mediaWindowManagement = new MediaWindowManagement(this)
  }

  private dehydrate() {
    return {
      mediaWindowManagement: toJS(this.mediaWindowManagement),
    }
  }

  private hydrate(state: any) {
    Object.assign(this.mediaWindowManagement, state.mediaWindowManagement)
  }
}
