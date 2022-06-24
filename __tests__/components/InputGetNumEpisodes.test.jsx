import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputGetNumEpisodes from '../../src/components/InputGetNumEpisodes'

describe('GetNumEpisodes test suite', () => {
  let mockedSetQueryArguments

  describe('snapshot tests', () => {
    it('should match starting snapshot', () => {
      const tree = renderer.create(<InputGetNumEpisodes setQueryArguments={vi.fn()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  beforeEach(() => {
    mockedSetQueryArguments = vi.fn()
    render(<InputGetNumEpisodes setQueryArguments={mockedSetQueryArguments}/>)
  })
  it('should render with correct label, placeholder text and no error message', () => {
    expect(screen.getByText('Number of episodes to retrieve.')).toBeDefined()
    expect(screen.getByPlaceholderText('Amount...')).toBeDefined()
    expect(() => screen.getByText('Error')).toThrow()
  })

  it('should call setQueryArguments with valid input', () => {
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: '10' } })
    expect(mockedSetQueryArguments).toHaveBeenCalled()
    expect(() => screen.getByText(/Error/)).toThrow()
  })

  it('should show error message with invalid input', () => {
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value: 'abc' } })
    expect(mockedSetQueryArguments).not.toHaveBeenCalled()
    expect(screen.getByText(/Error/)).toBeDefined()
  })

  it('should remove error message when invalid input is removed', () => {
    const input = screen.getByTestId('input')
    fireEvent.change(input, { target:{ value: 'abc' } })
    expect(screen.getByText(/Error/)).toBeDefined()
    fireEvent.change(input, { target:{ value: '' } })
    expect(() => screen.getByText(/Error/)).toThrow()
  })
})
