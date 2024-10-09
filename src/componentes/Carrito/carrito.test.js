import { render } from '@testing-library/react';
import Carrito from './carrito';

test('Renderiza el carrito vacío correctamente', () => {
  const { getByText } = render(<Carrito items={[]} />);
  expect(getByText(/El carrito está vacío/i)).toBeInTheDocument();
});