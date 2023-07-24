import React from "react";
import "./FeatureYourAppSection.css";

export const FeatureYourAppSection = () => {
  return (
    <div>
      <div className="login-container">
        <h1 className="featureapp-heading">Feature Your App</h1>

        <form
          // onSubmit={(e) => loginHandler(e, email, password)}
          className="login-body"
        >
          <div className="input-box">
            <div className="text-container">
              <label>Your App ID</label>
              <input
                // value={loginCredential.email}
                required
                // onChange={(e) =>
                //   setLoginCredential({
                //     ...loginCredential,
                //     email: e.target.value,
                //   })
                // }
                id="appID"
                placeholder="myapp.app"
                type="text"
              />
            </div>
            <div className="text-container">
              <label style={{ marginLeft: "6%" }}>
                Upload featured content
              </label>
              <label>
                <div>
                  <a className="upload">
                    Upload featured content
                    <input type="file" style={{ display: "none" }} />
                  </a>
                </div>
              </label>
            </div>
            
          </div>
          <div className="input-box">
            <div className="text-container">
              <label>Select Week</label>
              <input
                // value={loginCredential.email}
                required
                // onChange={(e) =>
                //   setLoginCredential({
                //     ...loginCredential,
                //     email: e.target.value,
                //   })
                // }
                id="week"
                type="week"
              />
            </div>
            <div className="text-container">
              <label>Enter POC Email</label>
              <input
                // value={loginCredential.email}
                required
                // onChange={(e) =>
                //   setLoginCredential({
                //     ...loginCredential,
                //     email: e.target.value,
                //   })
                // }
                placeholder="emaple@gmail.com"
                id="email"
                type="email"
              />
            </div>
            
          </div>
          <div className="feature-btn-container">
            <input value="Pay $5 to feature" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
