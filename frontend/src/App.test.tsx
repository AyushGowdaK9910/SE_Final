import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Converty/i)).toBeDefined();
  });

  it('should render file upload component', () => {
    render(<App />);
    expect(screen.getByText(/Upload File/i)).toBeDefined();
  });
});

