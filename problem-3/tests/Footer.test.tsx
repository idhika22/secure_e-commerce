import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  test('renders correctly with current year and links', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`© ${year}ShopEase`, 'i'))).toBeInTheDocument()

    
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    expect(screen.getByText(/Privacy/i)).toBeInTheDocument()
  })
})
