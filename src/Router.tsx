import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { AccountLoginPage } from "./pages/AccountLoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DebugPage } from "./pages/DebugPage";
import { GenerateProxiesPage } from "./pages/GenerateProxiesPage";
import { PaymentRetryPage } from "./pages/PaymentRetryPage";
import { PaymentStartPage } from "./pages/PaymentStartPage";
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";
import { PaymentTestPaymentFormPage } from "./pages/PaymentTestPaymentFormPage";
import { ProxyDetailsPage } from "./pages/ProxyDetailsPage";
import { ZeroBalancePage } from "./pages/ZeroBalancePage";

/*

/dashboard
/buy-proxies
/current-month
/subscription

/proxies/
/proxies/generate
/account
/account/new
/account/change-password
/account/logout
/account/invite

*/
const router = createBrowserRouter([{
  element: <AppLayout />,
  children: [
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxies/buy",
      element: <ZeroBalancePage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxies/:proxyPoolId",
      element: <ProxyDetailsPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxies/generate",
      element: <GenerateProxiesPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/account/login",
      element: <AccountLoginPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/account/signup",
      element: <AccountLoginPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/payment/start",
      element: <PaymentStartPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/payment/test-payment-form",
      element: <PaymentTestPaymentFormPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/payment/success",
      element: <PaymentSuccessPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/payment/retry",
      element: <PaymentRetryPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/debug",
      element: <DebugPage />,
      errorElement: <ErrorBoundary />
    },
  ]
}]);


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>
    <h2>Dang!</h2>;
    <pre>
      <strong>{error?.message}</strong>
      {error?.trace}
    </pre>
  </div>
}


export function AppRouter() {
  return <RouterProvider
    router={router}
  />
}