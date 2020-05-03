import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
const pStyle = {
  fontSize: '55px',
  textAlign: 'center',
  width: '200px',
};

Amplify.configure(awsconfig);
// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <div style={pStyle}>
      <AmplifyAuthenticator style={pStyle}>
        <AppProvider>
          {element}
          <AmplifySignOut />
        </AppProvider>
      </AmplifyAuthenticator>
    </div>
  );
};

// Page Transitions
//export const wrapPageElement = wrapPageElementWithTransition;
