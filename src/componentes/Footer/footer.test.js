import { render } from '@testing-library/react';
import Footer from './footer';

test('Renderiza correctamente el componente Footer', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/2024 Droguería/i)).toBeInTheDocument();
});