# Summary
A simple journal app that allows users to create and use accounts to access private journals. This app was created for Thinkful's Engineering Immersion program in order to practice building a full stack web application. The app idea and design is my own.

A live version of the site can be found [right here](https://capstone-journal-app.herokuapp.com/journal), and can be accessed with a demo account if you don't want to register.<br/>
Demo email: user@demo.com<br/>
Demo password: thinkfuldemoaccountei24<br/>

# Screenshots and additional information
![The main landing page](https://raw.githubusercontent.com/phelan97/journal-client/master/screenshots/landing-page.png)
![What the user sees when they log in for the first time](https://raw.githubusercontent.com/phelan97/journal-client/master/screenshots/journal-main.png)
![One of the possible screens when adding an entry](https://raw.githubusercontent.com/phelan97/journal-client/master/screenshots/add-post.png)

My goal is to eventually add additional features such as stat tracking, attachments, rich rext editing, and basic account options.

# Technical information
This repo holds the client side code, implemented in React. Redux is used to manage state, and Redux Forms manage login and registration. Finally, React Router manages navigation between components. The API counterpart backing the client lives [here](https://github.com/phelan97/journal-server)
