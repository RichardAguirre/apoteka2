import { render } from '@testing-library/react';
import Footer from './archivo';

test('Renderiza correctamente el componente Footer', () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Todos los derechos reservados/i)).toBeInTheDocument();
});