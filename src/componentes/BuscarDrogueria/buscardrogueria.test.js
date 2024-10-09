import { render, fireEvent } from '@testing-library/react';
import BuscarDrogueria from './buscardrogueria';

test('Renderiza correctamente el componente BuscarDrogueria', () => {
  const { getByPlaceholderText, getByText } = render(<BuscarDrogueria />);
  expect(getByPlaceholderText(/Ingrese una dirección/i)).toBeInTheDocument();
  expect(getByText(/Buscar/i)).toBeInTheDocument();
});