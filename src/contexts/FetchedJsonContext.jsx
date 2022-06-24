import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const FetchedJsonContext = createContext()

export const FetchedJsonProvider = ({ children }) => {
  const [json, setJson] = useState({value: 'nothing searched yet'})

  return (
    <FetchedJsonContext.Provider value={{
      json: json,
      setJson: setJson
    }}>
      {children}
    </FetchedJsonContext.Provider>
  )
}

FetchedJsonProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
}
