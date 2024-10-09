import { render } from '@testing-library/react';
import DetallesMedicamento from './detallesmedicamento';

test('Renderiza el componente DetallesMedicamento correctamente', () => {
  const { getByText } = render(<DetallesMedicamento medicamento={null} />);
  expect(getByText(/Seleccione un medicamento para ver los detalles/i)).toBeInTheDocument();
});

test('Muestra los detalles del medicamento seleccionado', () => {
  const medicamento = { nombre: 'Paracetamol', descripcion: 'Alivia el dolor y la fiebre' };
  const { getByText } = render(<DetallesMedicamento medicamento={medicamento} />);
  expect(getByText(/Paracetamol/i)).toBeInTheDocument();
  expect(getByText(/Alivia el dolor y la fiebre/i)).toBeInTheDocument();
});