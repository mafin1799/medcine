import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import './index.css'
import { Theme } from '@radix-ui/themes';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
 <Theme><App/></Theme>
)
