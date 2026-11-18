import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Searchbar from './pages/Searchbar';


describe('App Routing & Navigation', () => {
  it('renders the home page by default', () => {
    render(<App />);
    expect(screen.getByText(/The go to store for your coffee needs/i)).toBeInTheDocument();
  });
});

describe('Searchbar Component', () => {
  it('calls the onSearch function when the user types', () => {
    const mockOnSearch = vi.fn(); 
    
    render(<Searchbar searchTerm="" onSearch={mockOnSearch} />);
    
    
    const input = screen.getByPlaceholderText(/Search by title or description/i);
    fireEvent.change(input, { target: { value: 'Latte' } });
    

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });
});