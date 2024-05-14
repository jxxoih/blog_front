import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


const Login = () => {
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

    return (
        <>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const decodeToken = jwtDecode(credentialResponse.credential);
                        console.log(decodeToken);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
}

export default Login;