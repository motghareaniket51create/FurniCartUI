import { createRoot } from 'react-dom/client';
import login from './login';

it('should mount', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<login />);
  root.unmount();
});