import React from "react";
import "../../App.css";

export default function SignUp() {
  return (
    <React.Fragment>
      <h1 className="sign-up">
        {" "}
        <div class="aboutme">
          <p>
            Welcome to my portfolio! I have always had an interest in
            technology, specfically in coding. Since last year was quite unusual
            due to Covid-19 and work from home adjustments, I found myself
            having more time on my hands and I realized that this was a great
            time for me to learn more about the basics and and practice. I
            watched several tutorials, read explanations online and connected
            with different software engineers before I came across GWU's
            program. After more research and practice, I decided to enroll into
            the program to learn skills to become a full stack web developer and
            upskill as this will be useful to have such knowledge as more
            industries become more "tech-oriented". Below is my resume with
            contact information should you have any questions.
          </p>
          <li>
            <a
              href="https://drive.google.com/file/d/1ifgp6lxQIHtRGh1CbWEobIbzCiMhQhzg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://kokhobyohannes.github.io/UpdatedPortfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Web Dev Portfolio
            </a>
          </li>
        </div>
      </h1>
    </React.Fragment>
  );
}
