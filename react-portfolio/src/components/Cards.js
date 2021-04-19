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
        </div>
      </div>
    </div>
  );
}

export default Cards;
