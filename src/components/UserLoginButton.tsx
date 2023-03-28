import React from "react";

const UserLoginButton = () => {
  console.log("ULB5 here is user login button");

  const handleClick = () => {
    console.log("ULB7 clicked login button ");
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        login?
      </button>
    </>
  );
};

export default UserLoginButton;
