import InputGetAll from "./components/InputGetAll"
import InputGetNumEpisodes from "./components/InputGetNumEpisodes"
import PropTypes from 'prop-types'

const InputBuilder = (key, setQueryArguments) => {
  switch (key) {
    case 'getAll':
      return <InputGetAll setQueryArguments={setQueryArguments} />
    case 'getNumberOfEpisodes':
      return <InputGetNumEpisodes setQueryArguments={setQueryArguments} />
    default:
      return <h1>Select a Search Function</h1>
  }
}

InputBuilder.propTypes = {
  key: PropTypes.string.isRequired,
  setQueryArguments: PropTypes.func.isRequired,
}

export default InputBuilder
