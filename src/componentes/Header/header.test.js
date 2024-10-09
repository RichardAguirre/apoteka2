import { render } from '@testing-library/react';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

test('Renderiza correctamente el componente Header', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(getByText(/Droguería React/i)).toBeInTheDocument();
});