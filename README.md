# Evulpo quiz challenge

Coding Task for Full Stack Developer at evulpo

<div align="center">
   <img alt="Wolfie" src="./assets/mascot.png" width="120" />
</div>

## Task Descriptiom

Create a Single Choice Exercise Viewer, where you can go circulate in a random order through a collection of exercises, solve them, evaluate them and get back the score. For this you can use the Google Sheet database we set for you right here: https://docs.google.com/spreadsheets/d/1hzA42BEzt2lPvOAePP6RLLRZKggbg0RWuxSaEwd5xLc/edit?usp=sharing

Download this repository and start a new repository on your Github account with a copy of this repo. Please DO NOT start a branch or a fork from this repository.
Connect with the GOOGLE Sheet and retreive the data base over the API for this. We provide a code sample for that (CODE_SAMPLE_GAPI_CONNECTION)
Create the small web-app(website) using a simple file structure (index.html, main.js, style.css) -> We provide a code sample for that (CODE_SAMPLE_BASIC). Intentionally parts of the code have been deleted to avoid providing the solution but giving a hint and direction.
Try to commit often during your development process so that we can review the changes over time.
Document your work on the repository
Once you are done with your development, send me the link via Private Message on Slack to your github repository or to my email: andres@evulpo.com

## Focus

1. Communication and Code Readability
2. Interactivity
3. Data Connection and States
4. Memory Load and Performance
5. Front End

## Design with A.I.

The idea was to try to use some of the A.I as tools, and ended up with design finilized in Figma

1. For logo design used Looka website
2. For app design tryed DALL-E, Lexica, Stable Diffusion, though ended up using Midjourney, as it was giving results closer to what i needed
3. For mascot used stable diffusion
4. ChatGPT decided on font, first we though on Calibri as this is a sans-serif font that is known for its clean, modern look and easy readability. It is a popular choice for websites and is available on most computers and devices. In the end we decided to go for Lato google font, it is safer option as it is webfont and is also popular choice for websites and is available in a wide range of styles and weights.

All assets can be seen on assets page

## Tech

Communication is going through sockets, it provides real time data. As api call to google is on server, data is fetched only once regardless on how many clients join. Checks and data is on server side, user is not aware of which is correct answer. Along with socket server there is one more express server for hall of fame and assets page. On Client side we use typescript, unlike server side, where vanilla javascript is used. React context is used for global state, through <a href="https://www.npmjs.com/package/ts-use" target="_blank">TS Use</a>, my library of hooks for React. Along with TS Use, another library of helpers is used <a href="https://www.npmjs.com/package/tsl-utils" target="_blank">TSL Utils</a> that i added to npm, library to enable usage of selectors outside of redux.

## Start

There are 3 servers/ports on localhost, express server on port 7894 for hall of fame and assets page. Idea is to have admin page that can check results of players. Socket server on 4567. Client server on port 3000

At the moment this was not tested, on other browsers except chrome. Tere is also a bug when first client joins, it neeeds to refresh website after it submits name, and submit again, will open git issue and will address it as soon as possible.

```
  yarn
  yarn server
  yarn client
```

To see storybook

```
  yarn storybook
```

## Video Example

<a href="https://drive.google.com/file/d/1Qra5O23RKHaLY0OmD2SCqVeJeiI8UzWY/view?usp=sharing" target="_blank">
  Google Drive Link
</a>
