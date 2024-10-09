import { render, fireEvent } from '@testing-library/react';
import BuscarMedicamento from './buscarmedicamento';

test('Renderiza correctamente el componente BuscarMedicamento', () => {
  const { getByPlaceholderText, getByText } = render(<BuscarMedicamento />);
  expect(getByPlaceholderText(/Ingrese el nombre del medicamento/i)).toBeInTheDocument();
  expect(getByText(/Buscar/i)).toBeInTheDocument();
});

test('Permite al usuario escribir un medicamento', () => {
  const { getByPlaceholderText } = render(<BuscarMedicamento />);
  const input = getByPlaceholderText(/Ingrese el nombre del medicamento/i);
  fireEvent.change(input, { target: { value: 'Paracetamol' } });
  expect(input.value).toBe('Paracetamol');
});
