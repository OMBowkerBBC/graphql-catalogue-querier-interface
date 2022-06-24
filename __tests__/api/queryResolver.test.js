vi.mock('../../src/api/getAll', () => ({ default: vi.fn().mockImplementation(async () => console.log('In getAllMock'))}))
vi.mock('../../src/api/getNumberOfEpisodes', () => ({ default: vi.fn().mockImplementation(async () => console.log('In getNumberOfEpisodesMock'))}))

import QueryResolver from "../../src/api/queryResolver"
import acceptedFunctions from './acceptedFunctions.json'

describe('QueryResolver test suite', () => {
  it.each(acceptedFunctions)('it should return the correct ', async (acceptedFunction) => {
    expect(await QueryResolver(acceptedFunction.queryName, {}, () => {})).toEqual(acceptedFunction.returnTag)
  })

  it('should return nothing when a non accepted function is given', async () => {
    expect(await QueryResolver('nonAcceptedFunction', {}, () => {})).toEqual('')
  })
})