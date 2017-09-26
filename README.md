# CodesignedDemo

## General Info

I decide to build this code demo like I would approach a real-life large project. Instead of just building a static html page with some css magic, I decided to build a small Angular app that takes scalability in mind. The app was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2 and is being hosted with S3 on [AWS](https://aws.amazon.com/). The live site an be viewed [here](http://trippruittcodedemo.com/).

## Design

* Saved out images @2x for best quality on retina display
* Hosting images on [Cloudinary](https://cloudinary.com/) for cloud storage, quicker load time, and smaller app size.
* Fonts were mainly Helvetica with a handful of instances of Lato mixed in the design. I asked Sierra about this briefly and she said the design is in Lato. Lato medium is not available on Google Fonts for some reason so I got Sierra's local versions of Lato and used [Font Squirrel](https://www.fontsquirrel.com/) to generate the woff and woff2 file files.
* This is why the fonts are hosted within the app and I am not using a CDN to pull in the fonts.
* I am very familiar with frameworks such as Bootstrap and Foundation, however I chose to roll my own grid system for this demo. I feel like load time and less code bloat outweighed the structue I would get bringing in a large framework.
* Quick note: The element I dubbed to be the ```<h1>``` (the event title) was two slightly different shades between the three designs but I elected to go with the version in two out of the three designs.

## Development

* The app uses Angular components in order to have maxium scalability and reuseable parts.
* I wanted to bring in live data for the app so I created two databases. I chose to do two data bases in different ways to flex my dev muscles and show you a little of what I can do.
* One is maintained in [Firebase](https://firebase.google.com/) and it holds an observable with info about the meeting. The info includes the title, date, time, location, etc. 
* Info from this database can be found in the event-aside, event-details, and event-info components.
* The data is held in a Google Sheet which is then exported to Firebase when a user updates the sheet.
* I used a third party library called [AngularFire2](https://github.com/angular/angularfire2) to connect my app with the database.
* The other database is maintained within the app and is a JSON file that holds data about the current user.
* I created a service with AngularCLI that helps connect the data with the front end of the app.
