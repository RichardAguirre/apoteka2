import { render } from '@testing-library/react';
import ListaMedicamentos from './listamedicamentos';

test('Renderiza la lista de medicamentos correctamente', () => {
  const { getByText } = render(<ListaMedicamentos />);
  expect(getByText(/Acetaminofen/i)).toBeInTheDocument();
  expect(getByText(/Ibuprofeno/i)).toBeInTheDocument();
});