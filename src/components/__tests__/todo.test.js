import { render, screen, cleanup } from '@testing-library/react'
import Header from '../Header'

test('Should render Header component', () => {
  render(<Header />);
  // checking for appropriate id as passed from the component
  const headerElement = screen.getByTestId('header-1');
  expect(headerElement).toBeInTheDocument();

  // checking for the text section in the component
  expect(headerElement).toHaveTextContent('My Todo App');
})