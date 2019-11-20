// import axios from 'axios'
import { action, autorun, computed, observable } from 'mobx'

export default class MediaWindowManagement {
  @observable private currentModuleName: string
  @observable private streamObject: any

  constructor(rootStore: object) {
    this.currentModuleName = 'MediaWindow'
    autorun(() => {
      // this.rootStore = rootStore
    })
  }

  @action /*async*/
  private switchPageByModuleName(moduleName: string) {
    this.currentModuleName = moduleName || this.currentModuleName
  }

  @action
  private doStreamimg(stream: any) {
    this.streamObject = stream
  }

  @computed
  get openModal() {
    return 123
  }
}
