import { fireEvent, render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import InputGetAll from '../../src/components/InputGetAll'

describe('InputGetAll test suite', () => {
  let mockedSetQueryArguments = vi.fn()

  describe('snapshot tests', () => {
    it('should match starting snapshot', () => {
      const tree = renderer.create(<InputGetAll setQueryArguments={vi.fn()} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  beforeEach(() => {
    render(<InputGetAll setQueryArguments={mockedSetQueryArguments} />)
  })

  it('should show default placeholder text', () => {
    expect(screen.getByText('Choose an option...')).toBeDefined()
  })

  it('should call setQueryArguments function when an option is pressed', async () => {
    fireEvent.click(screen.getByText('Choose an option...'))
    fireEvent.click(screen.getByText('Brand'))
    expect(mockedSetQueryArguments).toHaveBeenCalled()
  })

  it.each(['Episode', 'Series', 'Brand'])('should set only value to type %s when selected', (type) => {
    fireEvent.click(screen.getByText('Choose an option...'))
    fireEvent.click(screen.getByText(type))
    expect(screen.getByText(type)).toBeDefined()
    expect(() => screen.getByText('Choose an option...')).toThrow()
  })
})