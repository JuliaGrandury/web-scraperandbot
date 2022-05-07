<!-- PROJECT TITLE PAGE -->
<br />
<div align="center">
  <a href="https://www.glenans.asso.fr/">
    <img src="https://www.safetics.com/wp-content/uploads/2019/10/les-glenans-logo-01-1.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Web Scraper and Reservation Bot for "Les Glénans" Sailing School</h3>
  <p align="center">
    Feel free to adapt this web scraper and reservation bot to something you might need
    <br />
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="https://github.com/JuliaGrandury/web-scraperandbot/issues">Report Bug</a>
    ·
    <a href="https://github.com/JuliaGrandury/web-scraperandbot/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Web Scraper And Reservation Bot Gif]](https://example.com)

**Why?** For the last couple of years, I have been attending a sailing school to obtain my windsurfing instructor's degree. Every year, the process of signing up is time consuming and stressful as spots quickly decrease and the rules state you must renew your reservations - which entails going to the website, signing up for every course again and clicking through all of the verification - every three days until you are ready to make the financial commitment. To avoid this yearly time consuming and tedious process, I decided to build a web scraper and reservation bot that could deal with this for me.

**TL;DR** I like to build things to make my life easier.

**Features include:**
* Prompts User: Prompts the user for login credentials to the school
* Logs In: Logs into the website after prompting the user for their email, password and desired course
* Scrapes the page: Scrapes the location, name, date and number of spots left for the course (note: the number of spots left per course is not public information in that it is not visible to anyone visiting the website.)
* Sends Summarized Data: Summarizes all of the extracted data into a human readable summary sent in an email after every run
* Makes a Reservation: Makes a reservation for the specific course on the specific date

Note: To make a reservation, a Les Glénans account is required. If the email and password you provided when prompted do not correspond to a registered account the program will return before making a reservation but after sending the summary of your requested courses.

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You will need to have Node.js and npm package manager installed. If you do not, visit [Node.js](https://nodejs.org/en/) and download the version labeled LTS. To install the latest version of npm run `npm install npm@latest -g`. Ensure that both are correctly installed using `node -v` and `npm -v`.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JuliaGrandury/web-scraperandbot.git
   ```
2. Install dependencies
   ```sh
   npm cheerio puppeteer prompts mocha chai dotenv nodemailer
   ```
3. Create a .env file where with two variables which will be used as the sender for the sendEmail function: `MAIL_EMAIL = 'your email'` and
`MAIL_PASSWORD = 'your password'`. You will need to disable two factor authorization and allow less trusted apps in your Gmail settings.

4. Run the application using `npm run start`
5. Run the test suite using `npm test` or a specific file using `npm test <filepath>`


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Sending summary email of results
- [X] Expanding sign in to the email and password provided
- [ ] Finish unit testing
- [ ] Submitting reservation of courses
- [ ] Confirmation email that reservation was made
- [ ] Automating as job every three days


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
Some helpful resources I used for various parts of my project.
* On using RegExp and .split for formatting while keeping the separator in the result: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
* On using nodemailer: https://www.youtube.com/watch?v=Va9UKGs1bwI
* On array testing in Mocha: https://victorleungtw.medium.com/testing-with-mocha-array-comparison-e9a45b57df27


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Julia Grandury - booleanjules@gmail.com

Project Link: [https://github.com/JuliaGrandury/web-scraperandbot](https://github.com/JuliaGrandury/web-scraperandbot)

<p align="right">(<a href="#top">back to top</a>)</p>


