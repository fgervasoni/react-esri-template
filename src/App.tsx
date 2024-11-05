import ErrorBoundary from './components/ErrorBoundary'
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom'
import commonIT from './translations/it/common.json';
import i18next from 'i18next';
import router from './router'

export default function App() {

  i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: 'it', // language to use
    resources: {
      it: {
        common: commonIT, // 'common' is our custom namespace
      },
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </I18nextProvider>
  )
}