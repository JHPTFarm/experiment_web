import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default inject('rootStore')(observer((props) => {
  const { children, rootStore } = props

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Helmet>
        <div id='header'>
          <div className='console'>Console</div>
        </div>
        {children}
        <footer/>
      </HelmetProvider>
    </React.Fragment>
  )
}))
