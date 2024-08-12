import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { appendGoogleProfileInfo, signin } from './auth';
import { GoogleProfile } from './user';

export function GoogleButton() {
  return <div className='inline-block py-4'>
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        if (!credentialResponse.credential) {
          throw new Error("onSuccess but no credential");
        }
        const googleProfile = jwtDecode(credentialResponse.credential) as GoogleProfile
        console.log({ googleProfile });
        if (!googleProfile?.email_verified) {
          // TODO smth
          return;
        }
        const email = googleProfile.email;
        await signin(email, googleProfile.sub);
        appendGoogleProfileInfo(googleProfile);
      }}
      onError={() => {
        console.error('Login Failed');
      }}
      auto_select
      useOneTap
    />
  </div>
}