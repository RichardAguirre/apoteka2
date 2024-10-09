import { render, fireEvent } from '@testing-library/react';
import Contacto from './contacto';

test('Renderiza correctamente el componente Contacto', () => {
  const { getByPlaceholderText, getByText } = render(<Contacto />);
  expect(getByPlaceholderText(/Ingrese su nombre/i)).toBeInTheDocument();
  expect(getByPlaceholderText(/Ingrese su mensaje/i)).toBeInTheDocument();
  expect(getByText(/Enviar/i)).toBeInTheDocument();
});