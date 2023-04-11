import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { useRouter } from "next/navigation";

import styles from "@/styles/Home.module.css";

const warningBox = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateNewAccount = () => {
  const [cantUseThatEmail, setCantUseThatEmail] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { push } = useRouter();

  console.log("CNA5 ");

  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const closeWarningBox = () => {
    console.log("clicked the other warning box");
    setCantUseThatEmail(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 7) {
      console.log("legitimate data, we can create account ");
      // create account here
      axios
        .post("http://localhost:8000/createNewUser/", {
          data: { userName: userName, email: email, password: password },
        })
        .then(function (response) {
          console.log("here is what we got", response);
          // if (response.status !== 201) {
          //   console.log("need to try again");
          //   setIsOpen(false);
          //   setCantUseThatEmail(true);
          // }
          if (response.status === 201) {
            console.log("created account successfully");
            push("/");
          }
        })
        .catch(function (error) {
          console.log("here is an error", error);
          setCantUseThatEmail(true);
        });
    } else {
      console.log("User not complete or password two short. try again ");
    }
  };
  return (
    <>
      <div className={styles.basicColumn}>
        <h3>Create a new account: </h3>
        <form className={styles.basicColumn}>
          <label htmlFor="userName">Chose a user name:</label>
          <input
            type="text"
            name="userName"
            placeholder="userName"
            onChange={handleUserNameChange}
          />

          <label htmlFor="email"> Enter your email address:</label>
          <input
            type="text"
            name="email"
            placeholder="email address"
            onChange={handleEmailChange}
          />

          <label htmlFor="password">
            Create a password at least 8 characters long:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </form>
      </div>
      <div className={styles.basicRow}>
        <button onClick={handleSubmit}>Submit new account</button>
        <button
          type="button"
          onClick={() => {
            push("/");
          }}
        >
          Close without creating new account
        </button>
      </div>
      <Modal
        isOpen={cantUseThatEmail}
        onRequestClose={() => setCantUseThatEmail(false)}
        style={warningBox}
        ariaHideApp={false}
      >
        <div className={styles.center}>
          <h5 className={styles.textCenter}>
            That email address is already taken, create a new account using this
            function or login using login
          </h5>
          <button type="button" onClick={closeWarningBox}>
            Close this message box
          </button>
          <button type="button" onClick={closeWarningBox}>
            Close this message box
          </button>
          <button type="button" onClick={closeWarningBox}>
            Close this message box
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CreateNewAccount;
