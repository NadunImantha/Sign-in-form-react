import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="form-div">
        <h1 id="title">Log in now</h1>
        <p id="description">Please login to continue</p>

        <form>
            <input type="text" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <p id="forgot-password">
                <a href="">Forgot password?</a>
            </p>
            <button id="log-btn">Log in</button>
            <p id="other-method-text">Or Sign Up Using</p>
            <div>
                <SocialIcon className="social-icon" url="https://twitter.com" fgColor="#FFFFFF"/>
                <SocialIcon className="social-icon" url="https://www.facebook.com" fgColor="#FFFFFF"/>
                <SocialIcon className="social-icon" url="https://mail.google.com" fgColor="#FFFFFF"/>
            </div>
        </form>


    </div>

  );
}

export default App;
