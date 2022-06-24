import { fireEvent, screen, render } from '@testing-library/react'
import renderer from 'react-test-renderer'

vi.mock('../../src/api/queryResolver', () => ({ default: vi.fn().mockImplementation(() => console.log('In QureyResovler Mock')) }))

import UserSelectionPanel from '../../src/components/UserSelectionPanel'
import QueryResolver from '../../src/api/queryResolver'

describe('UserSelectionPanel test suite', () => {
  const noFunctionSelectedMessage = 'Select a Search Function'
  const noFunctionSelectedDropDownValue = 'Choose a function...'
  const mockedSetJson = vi.fn()

  describe('snapshot tests', () => {
    it('should match starting snapshot', () => {
      const tree = renderer.create(<UserSelectionPanel setJson={vi.fn()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  beforeEach(() => {
    render(<UserSelectionPanel setJson={mockedSetJson} />)
  })

  it('should show buttons, default search inputs and default drop down option', () => {
    expect(screen.getByText('Search')).toBeDefined()
    expect(screen.getByText('Cancel')).toBeDefined()
    expect(screen.getByText(noFunctionSelectedMessage)).toBeDefined()
    expect(screen.getByText(noFunctionSelectedDropDownValue)).toBeDefined()
  })

  it('should change user input section when option is selected', () => {
    fireEvent.click(screen.getByText(noFunctionSelectedDropDownValue))
    fireEvent.click(screen.getByText('Get Number of Episodes'))
    expect(screen.getByText('Get Number of Episodes')).toBeDefined()
    expect(screen.getByPlaceholderText('Amount...')).toBeDefined()
    expect(() => screen.getByText(noFunctionSelectedMessage)).toThrow()
  })

  it('should call query resolver with correct parameters on search button press', () => {
    fireEvent.click(screen.getByText(noFunctionSelectedDropDownValue))
    fireEvent.click(screen.getByText('Get Number of Episodes'))
    fireEvent.click(screen.getByText('Search'))
    expect(QueryResolver).toHaveBeenCalledWith('getNumberOfEpisodes', {}, mockedSetJson)
  })
})