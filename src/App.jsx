import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Title from "./components/Title/Title";
import { HOST } from './components/hooks/constants';
import Users from "./components/Users/Users";
import Form from "./components/Form/Form";

function App() {
  const [data, setData] = useState({
    users: [],
    token: {},
    position: {},
    
  });

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      return response.json();
    };

    const fetchAllData = async () => {
      const [users, token, position] = await Promise.all([
        fetchData(`${HOST}/users?page=1&count=6`),
        fetchData(`${HOST}/token`),
        fetchData(`${HOST}/positions`),
      ]);

      setData({
        users,
        token,
        position,
      });
    };

    fetchAllData();
  }, []);

  const users = data.users.users;
  const token = data.token;
  const position = data.position;


  return (
    <>
      <Navbar />
      <div className="container">
        <Banner />
        <Title title='Working with GET request' />
        <Users users={users}/>
        <Title title='Working with POST request' />
        <Form token={token} position={position}/>
      </div>
    </>
  );
}

export default App;
