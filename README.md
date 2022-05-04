<!-- PROJECT TITLE PAGE -->
<br />
<div align="center">
  <a href="https://www.glenans.asso.fr/">
    <img src="https://www.safetics.com/wp-content/uploads/2019/10/les-glenans-logo-01-1.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Web Scraper and Reservation Bot for "Les Glénans" Sailing School</h3>
  <p align="center">
    Try making your life easier by adapting this web scraper and reservation bot to your needs!
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

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)

* [prompts](https://www.npmjs.com/package/prompts) which has great documentation

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
   npm cheerio puppeteer prompt prompt-choices mocha
   ```
3. Run the application using 
   ```sh
   npm run start
   ```
   
To test the whole suite run: `npm test`
To test individuals files run: `npm test <filepath>`
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Sending email of result summary
- [ ] Expanding sign in to the email and password provided
- [ ] Submitting reservation of courses 
- [ ] Automating as job every three days


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
Some helpful resources I used for various parts of my project.
* On using RegExp and .split for formatting while keeping the separator in the result: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
* On using array methods such as .join(), .filter()
* On using string methods such as .replaceAll(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
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


