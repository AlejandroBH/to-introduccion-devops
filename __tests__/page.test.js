import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
    it('renders the main heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('DevOps Project');
    });

    it('displays all technology badges', () => {
        render(<Home />);
        expect(screen.getByText(/Next.js/i)).toBeInTheDocument();
        expect(screen.getByText(/Docker/i)).toBeInTheDocument();
        expect(screen.getByText(/GitHub Actions/i)).toBeInTheDocument();
        expect(screen.getByText(/Jest/i)).toBeInTheDocument();
    });
});
