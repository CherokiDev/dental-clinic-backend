# appDates
## What is appDates? 🤔
appDates is an application to manage the appointments that a user has. In this case, it is about appointments for a dental clinic.
> Note: This repository is the backend of the application.

## Technologies used 🛠️
- JavaScript
- NodeJS 
- Express
- MongoDb
- Mongoose
- Mongo Atlas
- Bcryptjs
- Postman
- Github
- Gitflow
- RegEx
- Moment
- Heroku

## Necessary dependencies 📋
- bcryptjs
- express
- mongoose
- moment

## Steps to run the application 🚀
> - Download the [repository](https://github.com/Cheroki84/appDates.git)
>- Initialize npm and install the necessary dependencies:
>   - $ npm i
>- Run the app:
>   - $ npm run start

> Note: The application is uploaded to [Heroku](https://appdatesbackend.herokuapp.com)

## Some working samples ⚙️
#### User management 
- signup
![](img/readme/signup.gif)
<br>
- login
![](img/readme/logi.gif)
<br>
- logout
![](img/readme/logout.gif)

#### Appointment management
- newAppointment
![](img/readme/newAppointment.gif)
<br>
- getAppointments
![](img/readme/getAppointments.gif)
<br>
- deleteAppointment
![](img/readme/deleteAppointment.gif)


## All endpoints ⚫

##### Endpoints of Admin
- GET all users
    - /admin/allUsers
<br>
- GET all appointments
    - /admin/allAppointments/
<br>

##### Endpoints of Users
- POST sign up
    - /users/signup/
<br>
- POST login
    - /users/login
<br>
- PUT logout
    - /users/logout
<br>

##### Endpoints of Appointments
- GET appointments
    - /appointments/getAppointments/<<<user's token>>>
<br>
- POST new appointment
    - /appointments/newAppointment/>>>user's email<<<
<br>
- DELETE appointment
    - /appointments/deleteAppointment/<<<appointment's id>>>