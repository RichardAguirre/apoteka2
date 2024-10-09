import { render } from '@testing-library/react';
import Header from './header';

test('Renderiza correctamente el componente Header', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Apoteka React/i)).toBeInTheDocument();
});