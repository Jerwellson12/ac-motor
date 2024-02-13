import React from 'react';

function Notification({ message, type }) {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}

function SignUpSuccessNotification() {
  return <Notification message="Thank you for signing up! Your account has been successfully created." type="success" />;
}

function SignInErrorNotification() {
  return <Notification message="The email or password is incorrect. Please try again." type="error" />;
}

export { SignUpSuccessNotification, SignInErrorNotification };
export default Notification;
