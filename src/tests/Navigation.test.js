import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';

it('Render Navigation', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Beyond The Scene')).toBeInTheDocument();
});