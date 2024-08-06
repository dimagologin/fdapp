import { GoogleLogin } from '@react-oauth/google';

export function GoogleButton() {
  return <GoogleLogin
    onSuccess={credentialResponse => {
      console.log(credentialResponse);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
    auto_select
    useOneTap
  />;
}