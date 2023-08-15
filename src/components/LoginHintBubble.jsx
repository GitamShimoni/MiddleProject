import "./LoginHintBubble.css";
const LoginHintBubble = () => {
  return (
    <div id="login-hint-bubble-container">
      <div id="login-hint-user-div">
        <h1>Worker credentials:</h1>
        <h1>Username: gitam</h1>
        <h1>Password: ofek</h1>
      </div>
      <div id="login-hint-admin-div">
        <h1>Admin credentials:</h1>
        <h1>Username: ofek</h1>
        <h1>Password: gitam</h1>
      </div>
    </div>
  );
};

export default LoginHintBubble;
