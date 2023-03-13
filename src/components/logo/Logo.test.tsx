import { render, screen } from "@testing-library/react"
import Logo from "./Logo"

describe('Logo', () => {
  test('should render logo text', () => {
    render(<Logo/>)
    screen.getByText('Weather App')
  })
  test('should render logo icon', () => {
    render(<Logo/>)
    screen.getByLabelText('icon')
  })
})