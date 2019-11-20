import { inject, observer } from 'mobx-react'
import * as React from 'react'
import Theme from './Theme'

export default inject('rootStore')(observer((props) => {
  const { rootStore } = props
  const { mediaWindowManagement } = rootStore

  return (
    <Theme>
      Hi TPFarm
    </Theme>
  )
}))
