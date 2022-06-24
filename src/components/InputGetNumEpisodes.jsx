import { useState } from 'react'
import Input from '@bbc/igm-input'
import '@bbc/igm-input/dist/Input.css'
import PropTypes from 'prop-types'

const InputGetNumEpisodes = ({ setQueryArguments }) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const validateInput = (userInput) => {
    setInputValue(userInput)
    if (isNaN(parseInt(userInput)) && userInput.length > 0) {
      setShowErrorMessage(true)
    } else {
      setQueryArguments({amount: parseInt(userInput)})
      setShowErrorMessage(false)
    }
  }

  return (
    <Input
      name='amount'
      placeholder='Amount...'
      isClearable={true}
      label='Number of episodes to retrieve.'
      onChange={(e) => validateInput(e)}
      errorTitle={showErrorMessage ? 'Error!' : ''}
      errorMessage='Must be a number.'
      data-testid='input'
      value={inputValue}
    />
  )
}

InputGetNumEpisodes.propTypes = {
  setQueryArguments: PropTypes.func.isRequired,
}

export default InputGetNumEpisodes
