import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Button from '../components/Button';

test('renders content', () => {
  const button = {
    onClick: jest.fn(),
    label: 'Click me',
  };

  const component = render(<Button {...button} />);

  expect(component.getByText(button.label)).toBeInTheDocument();
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});
