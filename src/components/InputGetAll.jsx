import { useState } from 'react'
import Dropdown from '@bbc/igm-dropdown'
import '@bbc/igm-dropdown/dist/Dropdown.css'
import PropTypes from 'prop-types'

const options = [
  {
    value: 'episode',
    label: 'Episode'
  },
  {
    value: 'series',
    label: 'Series'
  },
  {
    value: 'brand',
    label: 'Brand'
  },
]

const InputGetAll = ({ setQueryArguments }) => {
  const [dropDownValue, setDropDownValue] = useState('episode')

  return (
    <Dropdown 
      options={options}
      placeholder='Choose an option...'
      size='small'
      onChange={(e) => {
        setDropDownValue(e)
        setQueryArguments({type: e.value})
      }}
      value={dropDownValue}
    />
  )
}

InputGetAll.propTypes = {
  setQueryArguments: PropTypes.func.isRequired,
}

export default InputGetAll
