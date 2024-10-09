import { render, fireEvent } from '@testing-library/react';
import ListaMedicamentos from './listamedicamentos';

test('Renderiza la lista de medicamentos correctamente', () => {
  const { getByText } = render(<ListaMedicamentos onMedicamentoSeleccionado={() => {}} />);
  expect(getByText(/Paracetamol/i)).toBeInTheDocument();
  expect(getByText(/Ibuprofeno/i)).toBeInTheDocument();
});

test('Permite seleccionar un medicamento', () => {
  const onMedicamentoSeleccionado = jest.fn();
  const { getByText } = render(<ListaMedicamentos onMedicamentoSeleccionado={onMedicamentoSeleccionado} />);
  fireEvent.click(getByText(/Paracetamol/i));
  expect(onMedicamentoSeleccionado).toHaveBeenCalledWith({ nombre: 'Paracetamol', descripcion: 'Alivia el dolor y la fiebre' });
});
