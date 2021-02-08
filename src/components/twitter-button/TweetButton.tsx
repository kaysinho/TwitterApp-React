import React from "react";
import TwitterLogin from "react-twitter-login";
 
export default (props:any) => {
  const authHandler = (err:any, data:any) => {
    console.log(err, data);
  };

  const CONSUMER_SECRET = "0hJ5bx4vuKJSCjzzS15de5ERYpAL2vDrPoYy9j9gcdw9efG9jR";
  const CONSUMER_KEY = "ZgkW7ZIcnTLaK9XGOiDZ1Fd0z"
 
  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={CONSUMER_KEY}
      consumerSecret={CONSUMER_SECRET}
    />
  );
};