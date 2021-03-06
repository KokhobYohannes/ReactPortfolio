import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>View Some of My Favorite Projects Below!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li>
              <a
                href="https://github.com/KokhobYohannes/HomeGrown"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  src="https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  text="HomeGrown: An app dedicated to supporting small and local businesses."
                  label="Shop Local"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/KokhobYohannes/DayPlanner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  text="Day Planner: An app to organize your tasks based on a color-coded timer."
                  label="Stay Organized"
                  path="/services"
                />
              </a>
            </li>
          </ul>

          <ul className="cards__items">
            <li>
              <a
                href="https://github.com/KokhobYohannes/Testrepo1/tree/master/02-Homework"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                  text="Fitness Tracker: Make your health a priority by tracking your daily workouts."
                  label="Healthy Habits"
                  path="/services"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/KokhobYohannes/WeatherDashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  src="https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  text="Weather Dashboard: An app for checking the weather forecast up to 5 days."
                  label="Weather Forecast"
                  path="/services"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/KokhobYohannes/HomeworkThree"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardItem
                  src="https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80"
                  text="Password Generator: Stumped for a password? Generate a random one here."
                  label="Security"
                  path="/services"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
