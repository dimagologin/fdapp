import { GoogleOAuthProvider } from '@react-oauth/google';
import { StrictMode } from 'react';
import { AppRouter } from './Router';
import { oAuthConfig } from './auth/config';

function App() {

  return <StrictMode>
    <GoogleOAuthProvider clientId={oAuthConfig.googleOAuthClientId}>
      <AppRouter />
    </GoogleOAuthProvider>
  </StrictMode>
}

export default App
