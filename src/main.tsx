import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/store.ts'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
    <Provider store={store}>
     <RouterProvider router={router}/>
       {/* <App /> */}
    </Provider>
    </SidebarProvider>
  </StrictMode>,
)
