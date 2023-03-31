import React from "react";

const UserLoginButton = () => {
  console.log("ULB5 user login button");

  const handleClick = () => {
    console.log("ULB7 clicked login button ");
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        &nbsp;&nbsp;login?&nbsp;&nbsp;
      </button>
    </>
  );
};

export default UserLoginButton;
