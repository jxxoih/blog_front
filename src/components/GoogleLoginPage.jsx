import { useNavigate } from "react-router-dom"

const GoogleLoginPage = () => {
    const GoogleLogin = () => {
        const navigate = useNavigate();

        const handleNavigateBack = () => {
            navigate(-1);
        };

        const handleLogin = () => {
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
            client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
            &redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
            &response_type=code
            &scope=email profile`;
        };

    };

    return (
        <>
        </>
    );
}

export default GoogleLoginPage;