import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProductCard from '../src/components/ProductCard'

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 100,
  image: 'test-image.jpg',
}

describe('ProductCard', () => {
  test('renders product details correctly', () => {
    const mockAddToCart = vi.fn()

    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} onAddToCart={mockAddToCart} />
      </MemoryRouter>
    )

    
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument()

    
    expect(screen.getByText(/100/i)).toBeInTheDocument()

   
    const img = screen.getByRole('img') as HTMLImageElement
    expect(img.src).toContain(mockProduct.image)

   
    const button = screen.getByRole('button', { name: /Add to Cart/i })
    expect(button).toBeInTheDocument()

    
    fireEvent.click(button)
    expect(mockAddToCart).toHaveBeenCalledTimes(1)
  })
})