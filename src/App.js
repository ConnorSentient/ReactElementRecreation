import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="cont">
      <Card
        img="https://a0.muscache.com/im/pictures/57127848/e576cfbd_original.jpg?aki_policy=xx_large"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet quam pretium, sagittis purus vitae, porttitor metus. In cursus egestas erat, ac aliquet odio bibendum id. Fusce feugiat tincidunt ultrices."
        userName="John "
        userLocation="United States"
        userAvatar="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
      />
      <Card
        img="https://a0.muscache.com/im/pictures/46403272/e10c610a_original.jpg?aki_policy=xx_large"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet quam pretium, sagittis purus vitae, porttitor metus."
        userName="Mike"
        userLocation="United Kingdom"
        userAvatar="https://staugustinescollege.ac.uk/content/uploads/2018/02/Simon-Stocks-500x500.jpg"
      />
      <Card
        img="https://a0.muscache.com/im/pictures/9a4fe8fd-8026-4747-b413-4bd27f0b3624.jpg?aki_policy=xx_large"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet quam pretium, sagittis purus vitae, porttitor metus. In cursus egestas erat, ac aliquet odio bibendum id. Fusce feugiat tincidunt ultrices."
        userName="John "
        userLocation="United States"
        userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGWTcTM16MzdvIGpT1_k9rgpPLz7wZ4Njdw_AHtVJo2zqti0D"
      />
    </div>
  );
}



function Card(props) {
  return (
    <div className="card">
      <img className="displayImg" src={props.img} alt="" />
      <p className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i className="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
      <p>{props.desc}</p>
      <User
        name={props.userName}
        location={props.userLocation}
        avatar={props.userAvatar}
      />
    </div>
  );
}

function User(props) {
  return (
    <div class="user">
      <img className="userAvatar" src={props.avatar} alt="" />
      <h3 className="userName">{props.name}</h3>
      <p className="userLocation">{props.location}</p>
    </div>
  );
}

export default App;
