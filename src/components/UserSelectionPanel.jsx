import { useState } from 'react'
import InputBuilder from '../InputBuilder'
import QueryResolver from '../api/queryResolver'
import Btn from '@bbc/igm-btn'
import Dropdown from '@bbc/igm-dropdown'
import '@bbc/igm-btn/dist/Btn.css'
import '@bbc/igm-dropdown/dist/Dropdown.css'
import queryMappings from '../data/queryMappings.json'

const UserSelectionPanel = ({ setJson }) => {
  const [dropDownValue, setDropDownValue] = useState({ label: 'Choose a function...', value: '0' })
  const [queryArguments, setQueryArguments] = useState({})

  return (
    <div className='left-panel'>
      <Dropdown
        options={queryMappings}
        placeholder='Choose a function...'
        size='small'
        onChange={(e) => {
          setDropDownValue(e)
          setQueryArguments({})
        }}
        value={dropDownValue}
      />
      <div className='input-section'>
        {InputBuilder(dropDownValue.value, setQueryArguments)}
      </div>

      <div className='button-wrapper'>
        <Btn className='button-height' gelIconName='search' onClick={() => QueryResolver(dropDownValue.value, queryArguments, setJson)}>Search</Btn>
        <Btn className='button-height' gelIconName='close'>Cancel</Btn>
      </div>
    </div>
  )
}

export default UserSelectionPanel
