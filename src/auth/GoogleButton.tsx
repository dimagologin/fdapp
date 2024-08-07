import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export function GoogleButton() {
  return <div className='inline-block py-4'>
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
        console.log(jwtDecode(credentialResponse.credential || ""));
      }}
      onError={() => {
        console.error('Login Failed');
      }}
      auto_select
      useOneTap
    />
  </div>
}