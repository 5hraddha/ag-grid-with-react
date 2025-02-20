import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DateFilterModule, ModuleRegistry, NumberFilterModule, TextFilterModule } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { App } from './components/app';
import './index.css';

ModuleRegistry.registerModules([ClientSideRowModelModule, TextFilterModule, NumberFilterModule, DateFilterModule]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
