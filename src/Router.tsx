import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { AppLayout } from "./layout/AppLayout";
import { AccountLoginPage } from "./pages/AccountLoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { DebugPage } from "./pages/DebugPage";
import { PaymentRetryPage } from "./pages/PaymentRetryPage";
import { PaymentStartPage } from "./pages/PaymentStartPage";
import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";
import { PaymentTestPaymentFormPage } from "./pages/PaymentTestPaymentFormPage";
import { ProxyPoolCreatePage } from "./pages/ProxyPoolCreatePage";
import { ProxyPoolDetailsPage } from "./pages/ProxyPoolDetailsPage";
import { ZeroBalancePage } from "./pages/ZeroBalancePage";

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
      path: "/proxy-pool/setup",
      element: <ProxyPoolCreatePage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxy-pool/create",
      element: <ProxyPoolCreatePage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxy-pool/:proxyPoolId",
      element: <ProxyPoolDetailsPage />,
      errorElement: <ErrorBoundary />
    },
    {
      path: "/proxies/generate",
      element: <ProxyPoolCreatePage />,
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