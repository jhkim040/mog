# mog
Personal Blog Made with ***ReactJS, Spring Boot***

(*Production Period : 2023.01.31 ~ 2023.02.13*)  
  
  
  
  
# Contents
* *[Development Enviornment](#development-environment)*
* *[Libraries and Frameworks](#libraries-and-frameworks)*
* *[Project Structure](#project-structure)*
* *[ERD](#erd)*
* *[Implemented Functions](#implemented-functions)*
* *[Execution Screens](#execution-screens)*
* *[Troubleshooting](#troubleshooting)*


------------
# 📚Development Environment 

## 📌 Backend
|Tool|Version|
|---|:---:|
|IntelliJ IDEA|Community Edition 2022.3|
|MySQL Workbench|8.0 CE|  

|Language|Version|
|---|:---:|
|Java|11|
|MySQL|8.0.30|  


## 📌 Frontend
|Tool|Version|
|---|:---:|
|Visual Studio Code|1.75.1|  

|Language|Version|
|---|:---:|
|HTML|5|
|CSS|3|
|JavaScript|ES6|

------------
# 📚Libraries and Frameworks

### Check out build.gradle and package.json for furthermore information!

## 📌 Backend
|Tool|Version|
|---|:---:|
|Spring Boot|2.7.8|
|mail|2.7.0|
|jpa||
|lombok|
|Spring Security||
|Json Web Token|0.11.2|
|freemarker||
|Spring Boot devtools||


## 📌 Frontend (installed with npx create-react-app, npm -i)
|Tool|Version|
|---|:---:|
|ReactJS|18.2.0|
|NodeJS|16.14.2|
|axios|1.2.6|
|bootstrap|5.2.3|
|react-bootstrap|2.7.0|
|react-redux|8.0.5|
|redux|4.2.1|
|redux-devtools-extension|2.13.9|
|react-scripts|5.0.1|
|react-router-dom|6.8.0|
|styled-components|5.3.6|

------------
# 📚Project Structure

## 📌 Frontend
![image](https://user-images.githubusercontent.com/105581574/218664580-952cd00e-4dd5-4fdf-95cd-1cd950690e7f.png)

## 📌 Backend
![image](https://user-images.githubusercontent.com/105581574/218664867-9cacaadf-2005-4b46-8515-e11f3b217d75.png)


# 📚ERD
![image](https://user-images.githubusercontent.com/105581574/218668563-3ee69c8c-164a-4a25-8615-b5319b1d9957.png)


------------
# 📚Implemented Functions
* **Member**
  * *Sign up an account*
    * Enter an email, a password, a nickname, a message(optional)
    * An entered email has to be a real email, since the email can be used for finding the password of your account.
  * *Log in with an account*
  * *Finding a password with a registered email*
    * A temporary random password will be sent to your email.
  * *Change your account-information*
    * Your password, nickname, message can be changed anytime.
    * In order to change your password, you must enter your present password.  
  * *Delete an account*
    * For safety, your present password has to be entered to delete your account.
    * If an account is deleted, every post and category in the account is also deleted at the same time.  
* **Category**
  * *Add a new category*
    * A new category can be added at the side category menu(located left in the main page)
  * *Delete a category*
    * A category can be deleted by clicking the minus-icon at the side category menu
    * If a certain category is deleted, then every post of the category is also deleted simultaneously. 
  * *Search a category*
    * You can search a post with a category you are looking for with the search input on the header of your screen.
* **Post**
  * *Add a post*
    * In order to add a post, a category must exist in advance.
    * A new post can only belong to a category already exists.
  * *Delete a post*
  * *Update a post*
    * Whenever a post is updated, updated time is saved automatically.
  * *Search a post*
    * You can search a post with a title you are looking for with the search input on the header of your screen.
   
------------
# 📚Execution Screens
# **Member**
## *Sign up an account*
* Enter an email, a password, a nickname, a message(optional)
* An entered email has to be a real email, since the email can be used for finding the password of your account.
## *Log in with an account*
## *Finding a password with a registered email*
* A temporary random password will be sent to your email.
## *Change your account-information*
* Your password, nickname, message can be changed anytime.
* In order to change your password, you must enter your present password.  
## *Delete an account*
* For safety, your present password has to be entered to delete your account.
* If an account is deleted, every post and category in the account is also deleted at the same time.  
# **Category**
## *Add a new category*
* A new category can be added at the side category menu(located left in the main page)
## *Delete a category*
* A category can be deleted by clicking the minus-icon at the side category menu
* If a certain category is deleted, then every post of the category is also deleted simultaneously. 
## *Search a category*
* You can search a post with a category you are looking for with the search input on the header of your screen.
# **Post**
## *Add a post*
* In order to add a post, a category must exist in advance.
* A new post can only belong to a category already exists.
## *Delete a post*
## *Update a post*
* Whenever a post is updated, updated time is saved automatically.
## *Search a post*
* You can search a post with a title you are looking for with the search input on the header of your screen.

------------
# 📚Troubleshooting


