import React from 'react'

const TopingsContext = React.createContext({
  changeToping: () => {},
  disableInfo: null,
  purchasingOrder: () => {}
})

export default TopingsContext;