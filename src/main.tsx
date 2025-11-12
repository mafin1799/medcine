import App from './App.tsx'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import "@radix-ui/themes/styles.css";
import './index.css'
import { Theme } from '@radix-ui/themes';

export const createRoot = ViteReactSSG(<Theme><App/></Theme>,)