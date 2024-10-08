import { render } from '@testing-library/react';
import Header from './archivo';

test('Renderiza correctamente el componente Header', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Droguería React/i)).toBeInTheDocument();
});