import { render } from '@testing-library/react';

import Home from '$/app/page';

describe('<Home />', () => {
  it('should render', () => {
    const { getByRole } = render(<Home />);

    expect(getByRole('button', { name: 'Go to the repository' })).toBeInTheDocument();
  });
});
