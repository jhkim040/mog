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

    * For security, every password is saved with being encrpyted by HMAC SHA 256. 

    * An entered email has to be a real email, since the email can be used for finding the password of your account.
    
  * *Log in / out with an account*  

    * If sign-up process is done, every single user gets authorization with being issued a certain access token.

    * The authorization allows each member to approach own user-information.
    
    * When you get logged-in, your access token is saved in the local-storage of your browser.  

    * The access token is expired after 30 minutes.
    
    * If you log-out, the local-storage will be empty.

    
  * *Finding a password with a registered email*
    * A temporary random password will be sent to your email.  

    
  * *Change your account-information*

    * Your password, nickname, message can be changed anytime.  
    
  
    * In order to change your password, you must enter your present password.  

   
  * *Delete an account*

    * For safety, your present password has to be entered to delete your account.
    * If an account is deleted, every post and category in the account is also deleted at the same time.   
   
  * *Register/update/delete a profile image

    * If there is no image saved, then common profile image will be applied.
    * You can delete or change your profile image.

    * You can register your own profile image at the 'user page'

   
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
    
    

  * *View a post in detail*
    * By clicking the title of a post, you can view a post in detail.

 
  * *Delete a post*
  * *Update a post*
    * Whenever a post is updated, updated time is saved automatically.

  * *Search a post*
    * You can search a post with a title you are looking for with the search input on the header of your screen.
   
------------
# 📚Execution Screens
* **Member**
  * *Sign up an account*
    * Enter an email, a password, a nickname, a message(optional)  
      
    ![image](https://user-images.githubusercontent.com/105581574/218747767-15e399f4-2f14-4816-aeba-b813d07f7f8b.png)

    * For security, every password is saved with being encrpyted by HMAC SHA 256. 

    ![image](https://user-images.githubusercontent.com/105581574/218750566-3dc97415-645f-4154-be3f-a32ff17368e8.png)

    * An entered email has to be a real email, since the email can be used for finding the password of your account.
    
  * *Log in / out with an account*  
    
    ![image](https://user-images.githubusercontent.com/105581574/218747932-2e7c66e4-bd69-4e13-9315-35c298276100.png)

    * If sign-up process is done, every single user gets authorization with being issued a certain access token.

    ![image](https://user-images.githubusercontent.com/105581574/218746291-e1915ccf-d1ed-45e2-b676-4e93ba939bf7.png)

    * The authorization allows each member to approach own user-information.
    * When you get logged-in, your access token is saved in the local-storage of your browser.  
    
    ![image](https://user-images.githubusercontent.com/105581574/218753247-87dfe248-7f2b-4483-bda4-25cc82fba59c.png)
    
    * If you log-out, the local-storage will be empty.
      
    ![logout](https://user-images.githubusercontent.com/105581574/218751975-4398a45a-6146-4782-a709-c4f2bb33c243.png)

    
  * *Finding a password with a registered email*
    * A temporary random password will be sent to your email.  
    
    ![image](https://user-images.githubusercontent.com/105581574/218749011-603075d8-6b77-42de-b463-b924a4280836.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218749123-e0645ed3-a768-410d-b479-544dc2cfd874.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218749411-f88f43c4-d678-4310-b1fa-502d62339a05.png)

    
  * *Change your account-information*

    ![changeinfo](https://user-images.githubusercontent.com/105581574/218751072-36ea1f69-168c-43d1-9d85-3711c8404d27.png)

    * Your password, nickname, message can be changed anytime.  
    
    ![changeinfo](https://user-images.githubusercontent.com/105581574/218752727-8db19f80-7e32-4a37-850d-12ca2f9cb1cd.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218750189-9a323e79-fc7a-41c3-ade9-64df44ee4133.png)

    ![image](https://user-images.githubusercontent.com/105581574/218750259-5c3fb299-802e-4836-92b3-9e39e59e87f9.png)
    
    * In order to change your password, you must enter your present password.    
    
    ![image](https://user-images.githubusercontent.com/105581574/218749884-c7439e42-49ff-4312-9e1d-4e55b8c8b561.png)

   
  * *Delete an account*

    ![deleteaccount](https://user-images.githubusercontent.com/105581574/218752461-bff5eb21-907c-428a-b265-a6b4d30e0b73.png)

    * For safety, your present password has to be entered to delete your account.
    * If an account is deleted, every post and category in the account is also deleted at the same time.   
   
  * *Register/update/delete a profile image

    * If there is no image saved, then common profile image will be applied.
    * You can delete or change your profile image.

    ![changeprofile](https://user-images.githubusercontent.com/105581574/218754552-0940d1cc-dc7a-4136-a6bd-39d7f07f8835.png)

    * You can register your own profile image at the 'user page'

    ![image](https://user-images.githubusercontent.com/105581574/218755198-91566f59-d95b-44fd-8e26-9a07328e9741.png)
    
    ![saveprofile](https://user-images.githubusercontent.com/105581574/218755746-18db3eb5-dced-4f7e-8d39-0c2e33cc7d85.png)
    
      
   
* **Category**
  * *Add a new category*
    * A new category can be added at the side category menu(located left in the main page)

    ![mainpage](https://user-images.githubusercontent.com/105581574/218757836-40067e34-16f9-4c7d-893c-4e54e997b78e.png)

    ![mainpage2](https://user-images.githubusercontent.com/105581574/218758487-dd20cc01-48d7-4c75-ab02-174289c0281a.png)

  * *Delete a category*
    * A category can be deleted by clicking the minus-icon at the side category menu
    * If a certain category is deleted, then every post of the category is also deleted simultaneously. 

  
  * *Search a category*
    * You can search a post with a category you are looking for with the search input on the header of your screen.

    ![findcate](https://user-images.githubusercontent.com/105581574/218766434-286583e3-4bf7-48d5-b3fd-973667d39010.png)
    
    
* **Post**
  * *Add a post*
    * In order to add a post, a category must exist in advance.
    * A new post can only belong to a category already exists.
    
    ![image](https://user-images.githubusercontent.com/105581574/218758799-312a67ee-6801-4fb8-9b48-a4cbff79e334.png)

  * *View a post in detail*
    * By clicking the title of a post, you can view a post in detail.

    ![addpost](https://user-images.githubusercontent.com/105581574/218759225-95866221-2fd0-4771-9f4f-25d4b025e852.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218759693-18574f9f-a86d-4364-aecd-679cb363f00c.png)

  * *Delete a post*
  * *Update a post*
    * Whenever a post is updated, updated time is saved automatically.
    
    ![updatepost](https://user-images.githubusercontent.com/105581574/218760148-180e6293-962d-4a9b-ac9b-93c0eb73e370.png)
    
    ![updatedate](https://user-images.githubusercontent.com/105581574/218760537-f5fce2f6-e9a2-4924-b9ff-68f51b938d65.png)

  * *Search a post*
    * You can search a post with a title you are looking for with the search input on the header of your screen.
    * If you search with empty input, the result brings all of the posts.
    
    ![image](https://user-images.githubusercontent.com/105581574/218765069-20553e21-beba-45e8-983c-b9cd8a458c70.png)
    
    ![searchposts](https://user-images.githubusercontent.com/105581574/218765388-ce84227a-e9a3-4a39-a46b-243a0e70ec80.png)
    
    * no post found
    
    ![image](https://user-images.githubusercontent.com/105581574/218765727-b0ec092a-efb0-4fc2-b919-6af5a67b15c7.png)

------------
# 📚Troubleshooting


