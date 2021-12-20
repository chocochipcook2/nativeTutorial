import React, { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
         setIsLoggedIn(true);
      }
      if (payload.event === 'signOut') {
         //console.log('a user has signed out!')
         setIsLoggedIn(false);
      }
    });

    return () => {}
  }, []);

  return (
    <NavController isLoggedIn={isLoggedIn}/>
  ) : (
    <AppLoading />
  );
}