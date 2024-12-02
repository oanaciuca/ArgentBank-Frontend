import React from "react";
import NavBar from "../components/NavBar";
import '../css/main.css';

const ProfilePage = () => {
  const user = {
    firstName: "Tony",
    lastName: "Jarvis",
    accounts: [
      {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
      },
      {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
      },
      {
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        description: "Current Balance",
      },
    ],
  };

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {user.accounts.map((account, index) => (
          <section key={index} className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default ProfilePage;
