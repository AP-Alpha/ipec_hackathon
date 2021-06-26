import React from 'react';
import '../../App.css';

import '../../signup_style.css';
export default function SignUp() {
  return (
    <>



      <div className="login-page">
        <div className="form">
          <form>
            <lottie-player
              src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
              background="transparent"
              speed="1"
              style={{ "justifyContent": "center" }}
              loop
              autoplay
            ></lottie-player>
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="email address" />
            <input type="text" placeholder="pick a username" />
            <input type="password" id="password" placeholder="set a password" />
            <i className="fas fa-eye" onclick="show()"></i>
            <br />
            <br />
          </form>

          <form className="login-form">
            <button type="button" onclick="/">
              SIGN UP
            </button>
          </form>
        </div>
      </div>

      {/* <script>
            function show() {
        {{var password = document.getElementById("password");}}
        {{var icon = document.querySelector(".fas");


        if (password.type === "password") {
              password.type = "text";
        } else {
              password.type = "password";
        }
      }
    </script> */}

    </>
  );
}
