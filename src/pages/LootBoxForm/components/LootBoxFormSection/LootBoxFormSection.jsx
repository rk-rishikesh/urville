import React from "react";
import "./LootBoxFormSection.css";

export const LootBoxFormSection = () => {
  return (
    <div>
      <div className="login-container">
        <h1 className="featureapp-heading">Create Lootbox</h1>

        <form
          // onSubmit={(e) => loginHandler(e, email, password)}
        
        >
        
          <div className="input-box">
            <div className="text-container">
              <img
                style={{ width: "50%" }}
                src="https://t3.ftcdn.net/jpg/05/81/96/18/360_F_581961887_UMLpEZjYjvieMoV8EbF2pzPb3rqBxyZS.jpg"
              />
            </div>

            <div style={{ marginLeft: "-50%", marginTop: "7%" }}>
            <div className="loot-container">
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
              <div className="loot-container">
                <label>NFT Contract Address </label>
                <input
                  // value={loginCredential.email}
                  required
                  // onChange={(e) =>
                  //   setLoginCredential({
                  //     ...loginCredential,
                  //     email: e.target.value,
                  //   })
                  // }
                  id="contract"
                  placeholder="0x0000....000"
                  type="text"
                />
              </div>
              <div className="loot-container">
                <label>Token ID</label>
                <input
                  // value={loginCredential.email}
                  required
                  // onChange={(e) =>
                  //   setLoginCredential({
                  //     ...loginCredential,
                  //     email: e.target.value,
                  //   })
                  // }
                  id="token"
                  placeholder="00"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="lootbox-btn-container">
            <input value="Create Lootbox" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
