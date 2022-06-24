import getAll from './getAll'
import getNumberOfEpisodes from './getNumberOfEpisodes'

const QueryResolver = async (queryName, queryArgs, setJson) => {
  switch (queryName) {
    case 'getAll':
      await getAll(queryArgs, setJson)
      return 'Get All'
    case 'getNumberOfEpisodes':
      await getNumberOfEpisodes(queryArgs, setJson)
      return 'Get Number of Episodes'
    default:
      return ''
  }
}

export default QueryResolver 
