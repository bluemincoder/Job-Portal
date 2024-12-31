# Job Portal with Automation

This project is a comprehensive job portal that allows employers to post, delete, and view job applications and resumes, while job seekers can browse jobs, filter them based on location, and apply. Additionally, it features an automation system that sends job notifications via email to job seekers based on their preferred job niches.

## Features

-   **Employer Features:**

    -   Post and delete job postings.
    -   View all applications for their jobs, including resumes.

-   **Job Seeker Features:**

    -   Browse and filter jobs based on location or keyword search.
    -   Apply to jobs and view their applied jobs on a dashboard.

-   **Automation:**
    -   Automatically emails job seekers when a job matching their preferred niches is posted.

## Dependencies

### Frontend

-   `@reduxjs/toolkit`
-   `axios`
-   `react`
-   `react-dom`
-   `react-icons`
-   `react-redux`
-   `react-router-dom`
-   `react-spinners`
-   `react-toastify`

### Backend

-   `bcrypt`
-   `cloudinary`
-   `cookie-parser`
-   `cors`
-   `dotenv`
-   `express`
-   `express-fileupload`
-   `jsonwebtoken`
-   `mongoose`
-   `node-cron`
-   `nodemailer`
-   `validator`

## Pre-requisites

Ensure the following services are installed and running:

-   [MongoDB](https://www.mongodb.com/)
-   [Node.js](https://nodejs.org/)

## Setup Instructions

### Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/bluemincoder/Job-Portal.git
```

### Run the Client

```bash
cd client
npm run dev
```

### Run the Backend

```bash
cd Backend
npm run dev
```

## API Endpoints

### User Routes

- **Register a User**
    Allows users to create a new account.  
    **Method:** POST
    ```
    http://localhost:4000/api/v1/user/register
    ```

- **Login a User**
    Authenticates a user and returns a token.  
    **Method:** POST
    ```
    http://localhost:4000/api/v1/user/login
    ```

- **Get User Details**
    Fetches the details of the logged-in user.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/user/getuser
    ```

- **Logout a User**
    Logs out the current user.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/user/logout
    ```

- **Update Profile**
    Updates the user's profile information.  
    **Method:** PUT
    ```
    http://localhost:4000/api/v1/user/update/profile
    ```

- **Update Password**
    Updates the user's password.  
    **Method:** PUT
    ```
    http://localhost:4000/api/v1/user/update/password
    ```

### Job Routes

- **Post a Job**
    Creates a new job listing.  
    **Method:** POST
    ```
    http://localhost:4000/api/v1/job/post
    ```

- **Get All Jobs**
    Retrieves all available job listings.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/job/getall
    ```

- **Get My Jobs**
    Retrieves all jobs posted by the logged-in user.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/job/getmyjobs
    ```

- **Delete a Job**
    Deletes a specific job listing.  
    **Method:** DELETE
    ```
    http://localhost:4000/api/v1/job/delete/:id
    ```

- **Get a Single Job**
    Retrieves details of a specific job.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/job/get/:id
    ```

### Application Routes

- **Post an Application**
    Submits a job application.  
    **Method:** POST
    ```
    http://localhost:4000/api/v1/application/post/:id
    ```

- **Employer Get All Applications**
    Retrieves all applications received by the employer.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/application/employer/getall
    ```

- **Job Seeker Get All Applications**
    Retrieves all applications submitted by the job seeker.  
    **Method:** GET
    ```
    http://localhost:4000/api/v1/application/jobseeker/getall
    ```

- **Delete an Application**
    Deletes a specific application.  
    **Method:** DELETE
    ```
    http://localhost:4000/api/v1/application/delete/:id
    ```


## Built With

-   **Frontend**:

    -   [React](https://reactjs.org/)
    -   [React Router DOM](https://reactrouter.com/)
    -   [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
    -   [Redux Toolkit](https://redux-toolkit.js.org/)
    -   [Axios](https://axios-http.com/)

-   **Backend**:
    -   [Express.js](https://expressjs.com/)
    -   [Mongoose](https://mongoosejs.com/)
    -   [Node.js](https://nodejs.org/)
    -   [Nodemailer](https://nodemailer.com/)
    -   [Node Cron](https://www.npmjs.com/package/node-cron)
    -   [Cloudinary](https://cloudinary.com/)

## How It Works

1. **Employers**:

    - Employers can register, log in, and manage job postings through their dashboard.
    - Applications for jobs are accessible, with resumes displayed for review.

2. **Job Seekers**:

    - Job seekers can browse and filter jobs, then apply with a resume.
    - Notifications are sent automatically for jobs matching their preferences.

3. **Automation**:
    - Job seekers can set three preferred niches. When a job post matches, they receive an email notification.
