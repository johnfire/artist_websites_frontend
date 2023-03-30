import React from "react";

const CreateAccountButton = () => {
  console.log("ULB5 here is user create account button");

  const handleClick = () => {
    console.log("ULB7 clicked create account  button ");
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        Create new user account
      </button>
    </>
  );
};

export default CreateAccountButton;
