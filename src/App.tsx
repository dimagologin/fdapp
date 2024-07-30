import './App.css'
import { CheckoutPage } from './CheckoutPage'
import { DashboardPage } from './DashboardPage'
import { Layout } from './Layout'
import { useAvailableCountries, useIsStartedCheckout } from './state'
import { ZeroBalancePage } from './ZeroBalancePage'


function Navigation() {
  const isStartedCheckout = useIsStartedCheckout();
  const balance = useAvailableCountries();

  if (isStartedCheckout) {
    return <CheckoutPage />;
  }
  if (balance > 0) {
    return <DashboardPage />
  }
  return <ZeroBalancePage />
}

function App() {
  // const isStartedCheckout = useIsStartedCheckout();
  // const balance = useBalance();

  return <Layout>
    <Navigation />
  </Layout>
}

export default App
