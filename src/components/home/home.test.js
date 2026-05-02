import { createRoot } from 'react-dom/client';
import home from './home';

it('should mount', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<home />);
  root.unmount();
});