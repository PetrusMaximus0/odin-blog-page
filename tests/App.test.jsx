import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('Headline', () => {
	it('Renders the headline', () => {
		render(<App />);
		expect(
			screen.getByRole('heading', { textContent: 'This is the App' })
		).toBeInTheDocument();
	});
});
