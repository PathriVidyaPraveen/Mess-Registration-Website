# Mess-Registration-Website

This is a very useful web applictation for students to do various things like mess registration , mess swap and mess rebate and also checking mess menu. And also mess administrators can check the registered students for their mess and also click a button for starting mess registration which allows students to register for their desired mess.  
---------------------------------------------------------------------------------------------------------
Features for Student Login :   
1) Seeing mess menu
2) Mess Registration along with profile view of theire current mess and previous mess
3) Mess Rebate Form opening
4) Mess Swap option
---------------------------------------------------------------------------------------------------------
Features for Admin Login :
1) Check the names and roll numbers of registered students.
2) Start the process of mess registration
---------------------------------------------------------------------------------------------------------
Team Members and their Contribution  :  
1) Boreddy Sri Sai Abhinav Reddy - Frontend development for student login and student registration.
2) Tavva Dinesh Reddy - Database development and Frontend development for admin panel.
3) Pathri Vidya Praveen - Backend development  '
---------------------------------------------------------------------------------------------------------
Tech Stack Used for building this project: (MERN Stack)  

1) Frontend - HTML,CSS, Vanilla Javascript , ReactJS
2) Backend - NodeJS , ExpressJS
3) Database - MongoDB
---------------------------------------------------------------------------------------------------------
Setting Up Backend :  
1) Install NodeJS annd npm onto the machine. In Ubuntu terminal , run the following command.
   sudo apt update
   sudo apt install nodejs npm
2) After installations , check the versions.
   node -v
   npm -v
3) Now , we need to install ExpressJS
   npm install express
4) Next , we need to install cors.
   npm install cors
5) Finally , we need to install MongoDB.
   npm install mongodb
---------------------------------------------------------------------------------------------------------   
setting up Front end:
1.	Setting up the frontend doesn’t require any installations here.
   In our React JS files, we used <script> tags with type="text/babel" which allows the browser to compile JSX directly using Babel.
2.	We imported React and ReactDOM packages via CDN links in the script tags.
   This approach doesn’t require installing anything using npm or other package managers.
3.	Although this method works well for small projects,
   it is not recommended for large-scale applications due to performance and scalability issues.
---------------------------------------------------------------------------------------------------------  	
Overview of Backend files and their functions :  
1) backend_student_login_verification.js is the backend file that handles the API request for student authentication during the student login and returns successful status to the frontend if the request made by the frontend by sending email and password matches with the database. Also in addition to this , it send all the details of the student present in the database which is used by the frontend for profile display and other cool features.
2) backend_admin_login_verification,js is the backend file that is useful for admin authentication for admin login by matching the email and password with the database and then returning success status if it matches. Then it returns list of all students registered for that mess of admin , mess of particular admin and number of registered students.
3) backend_deploy_mess_registration.js is the backend file that handles the API request for floating mess registration by the admin so that if the request is sent , then all the students in the database - their previous mess is updated with current mess and current mess is replaced by empty string.
4) backend_current_mess_registration.js is the backend file that handles API request of student mess registration. Frontend sends the email , password and the mess that student wanted to register to. Then this file first checks whether the mess admin floated mess registration or not. If mess admin did not start registration , then it returns message of mess cannot be registered. If it started , then according to databse , currently assuming the maximum limit of mess to be 250 , if the registered students for a mess that the student request for assigning is exceeding the maximum limit , he is assigned the other mess. (Number of students in database < 500). If there is a vacancy in the mess that the student wanted , he will be assigned for that mess. So finally returns the assigned mess after making these validations.

---------------------------------------------------------------------------------------------------------
overview of database files :  
1) students_data.json is the JSON documents file present in MongoDB atlas cluster for students data.
2) admin_data.json is the JSON documents file present in MongoDB Atlas Cluster for admins data.
---------------------------------------------------------------------------------------------------------
Frontend Files Overview:

1) index.html  
   Likely the entry point or landing page of the site.  
   May include role selection (Admin/Student) or redirect logic based on login type.  

2) html folder:  

   • admin_dashboard.html  
     The main dashboard view for administrators.  
     Likely includes links to manage mess registrations, view stats, etc.  

   • admin_login.html  
     Login interface specifically for administrators to access their dashboard.  

   • menu_admin.html  
     Page where admin can view mess menus for different days or messes.  

   • menu_student.html  
     Page where students can view the mess menu (read-only version compared to admin’s).  

   • registered_students.html  
     Displays a list of students who have completed registration.  
     Possibly includes filters or sorting features.  

   • registration.html  
     The main mess registration page where students choose their mess preferences.  
     Includes:  
     1) Current month registration  
     2) Past registrations  
     3) Active “Register Now” button only at the end of the month  
     4) Options like MessA, MessB  

   • student_dashboard.html  
     The student’s main dashboard page after logging in.  
     Likely shows registration status, menu view, rebate, swap options, etc.  

   • swap.html  
     A page to allow students to request a mess swap with another student.  
     Functionality may include search, submit, etc.  

3) css folder:  
   Contains all the stylesheets for the website.  

   • student_details.css  
     Likely used to style the page that shows student information  
     (possibly registered_students.html).  

   • style.css  
     Probably the global stylesheet that controls layout, color themes, fonts, etc.  
     across multiple pages.  

   • styles.css  
     Appears to be an additional or alternative stylesheet.  
     You might want to check if it’s being used anywhere to avoid redundancy with style.css.  

4) images folder:  

   • iithmess.jpg  
     A nice photo of the IITH mess.  

   • iithmess.jpeg  
     A Ghibli-style version of iithmess.jpg.
5) js folder:
   • this folder constitutes of react js and vanilla js files
   • react js files are:
   admin_dashboard.js,admin_deploy.js,registered_students.js,student_dashboard.js,student_registration.js
   this files used fetches which goes to backend files and takes the neccesary data such as mess details , id ,password
   • vanilla js files are:
   login.js,menu_Admin.js,menu_student.js,script_admin.js,script_student.js these files are used for just displaying some stuff dynamically no fetches are used here 

---------------------------------------------------------------------------------------------------------
Backend deployment using Render :  
https://mess-app-backend-hcin.onrender.com

---------------------------------------------------------------------------------------------------------
Final Mess Registration Website Link :  
https://roaring-cuchufli-792895.netlify.app/  


---------------------------------------------------------------------------------------------------------
Future improvements that can be made for this project:  
1) Mess Feedback option
2) Responsiveness to mobile phones for making it easy to mess entry
3) Security improvements for database.
4) Handling everything in single front end files instead of writing multiple files for fast website.
5) Mess Entry using QR Code based scanning and making the limit to 1 for breakfast , lunch aand dinner.
6) Handling multiple mess registration requests at a time using timestamps.
7) to write react in jsx files and not use babel scripts
8) mess rebate and swap should be handled by this page only not some google form etc.

   



