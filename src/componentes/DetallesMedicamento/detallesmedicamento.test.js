import { render } from '@testing-library/react';
import DetallesMedicamento from './detallesmedicamento';

test('Renderiza el componente DetallesMedicamento correctamente', () => {
  const { getByText } = render(<DetallesMedicamento medicamento={null} />);
  expect(getByText(/Seleccione un medicamento para ver los detalles/i)).toBeInTheDocument();
});
