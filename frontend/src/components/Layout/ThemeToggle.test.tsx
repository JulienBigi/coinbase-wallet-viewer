import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeContext';

const renderWithTheme = () => {
  return render(
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
};

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.setAttribute('data-theme', '');
  });

  it('loads the theme from localStorage', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('dark');
    renderWithTheme();
    expect(localStorage.getItem).toHaveBeenCalledWith('theme');
  });

  it('saves the theme in localStorage on toggle', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    renderWithTheme();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'theme',
      expect.stringMatching(/light|dark/)
    );
  });

  it('toggles between light and dark themes', () => {
    renderWithTheme();

    const button = screen.getByRole('button');
    const initialLabel = button.getAttribute('aria-label');

    fireEvent.click(button);

    const newLabel = button.getAttribute('aria-label');
    expect(newLabel).not.toBe(initialLabel);
  });
});
