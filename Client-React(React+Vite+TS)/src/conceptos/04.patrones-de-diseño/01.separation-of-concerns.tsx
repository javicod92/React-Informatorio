import React from 'react';

type User = { name: string; registrationStatus: string };
type BannerProps = {
  type: 'success' | 'error';
  children: React.ReactNode;
};
function Banner({ type, children }: BannerProps) {
  const backgroundColor = type === 'success' ? 'green' : 'red';
  // if (user.registrationStatus === 'unverified') {
  //   return null;
  // }

  return <div style={{ backgroundColor }}>{children}</div>;
}

type AuthRequiredProps = { user: User; children: React.ReactNode };
function AuthRequired({ user, children }: AuthRequiredProps) {
  if (user.registrationStatus === 'unverified') {
    return null;
  }

  return children;
}

const USER: User = {
  name: 'Ivan',
  registrationStatus: 'verified',
};
export default function App() {
  return (
    <>
      <h1>Mi App</h1>
      <AuthRequired user={USER}>
        <Banner type="success">Login Exitoso! Bienvenido, {USER.name}!</Banner>
      </AuthRequired>
    </>
  );
}
