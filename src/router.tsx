import Index from './pages/Index'
import Layout from './components/ui/Layout'
import NotFound from './pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <Index />
            </Layout>
        ),
    },
    {
        path: '*',
        element: (
            <Layout>
                <NotFound />
            </Layout>
        ),
    },
])

export default router