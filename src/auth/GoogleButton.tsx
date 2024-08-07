import { GoogleLogin } from '@react-oauth/google';

export function GoogleButton() {
  return <div className='inline-block py-4'>
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.error('Login Failed');
      }}
      auto_select
      useOneTap
    />
  </div>
}