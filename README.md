# mog

Personal Blog (Cloud Service) Made with ***ReactJS, Spring Boot***

(*Production Period : 2023.01.31 ~ 2023.02.13*)  
  
  
  
  
# Contents
* *[Development Enviornment](#development-environment)*
* *[Libraries and Frameworks](#libraries-and-frameworks)*
* *[Project Structure](#project-structure)*
* *[ERD](#erd)*
* *[Implemented Functions](#implemented-functions)*
* *[Execution Screens](#execution-screens)*
* *[Extra Features](#extra-features)*


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
   
  * *Register/update/delete a profile image*

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
      
    ![image](https://user-images.githubusercontent.com/105581574/219035257-f1ee4acb-8f5c-498c-9b44-e11caae46ef7.png)

    * For security, every password is saved with being encrpyted by HMAC SHA 256. 

    ![image](https://user-images.githubusercontent.com/105581574/218750566-3dc97415-645f-4154-be3f-a32ff17368e8.png)

    * An entered email has to be a real email, since the email can be used for finding the password of your account.
    
  * *Log in / out with an account*  
    
    ![image](https://user-images.githubusercontent.com/105581574/219035427-78031b84-408f-44b9-8099-bd7fe960a346.png)

    * If sign-up process is done, every single user gets authorization with being issued a certain access token.

    ![image](https://user-images.githubusercontent.com/105581574/219036833-6eba5402-d755-4560-a93c-0be4b14cf8f6.png)

    * The authorization allows each member to approach own user-information.
    * When you get logged-in, your access token is saved in the local-storage of your browser.  
    
    ![image](https://user-images.githubusercontent.com/105581574/218753247-87dfe248-7f2b-4483-bda4-25cc82fba59c.png)
    
    * If you log-out, the local-storage will be empty.
      
    ![logoutbutton](https://user-images.githubusercontent.com/105581574/219037043-e7188190-1bc6-456e-b887-07ecc9ad07c4.png)

    
  * *Finding a password with a registered email*
    * A temporary random password will be sent to your email.  
    
    ![image](https://user-images.githubusercontent.com/105581574/219036160-ec9a3f30-555b-401a-a9bc-c54c3ff662e9.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218749123-e0645ed3-a768-410d-b479-544dc2cfd874.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/218749411-f88f43c4-d678-4310-b1fa-502d62339a05.png)

    
  * *Change your account-information*
    
    * Your password, nickname, message can be changed anytime.  
    
    ![change](https://user-images.githubusercontent.com/105581574/219037517-827031b9-0e87-49ef-9a06-a7e27380099d.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/219037694-e17b8bb8-c69b-48bc-abc3-374d9bc75460.png)

    ![image](https://user-images.githubusercontent.com/105581574/219037775-e536fdc3-5f17-4f9a-a10a-8a8665040760.png)
    
    * In order to change your password, you must enter your present password.    
    
    ![image](https://user-images.githubusercontent.com/105581574/219037863-b8ffecec-de66-46a2-adef-748da2a247f0.png)

   
  * *Delete an account*

    ![deleteacc](https://user-images.githubusercontent.com/105581574/219038064-a20d8639-93eb-40e0-aa1a-0490a16b13cc.png)

    * For safety, your present password has to be entered to delete your account.
    
    ![image](https://user-images.githubusercontent.com/105581574/219038126-fa622438-0696-4230-bbc6-073a4d94a01a.png)

    * If an account is deleted, every post and category in the account is also deleted at the same time.   
   
   
  * *Register/update/delete a profile image

    * If there is no image saved, then common profile image will be applied.
    * You can delete or change your profile image.

    ![changeimg](https://user-images.githubusercontent.com/105581574/219038478-6dac501a-eb31-4197-8b50-c45d56dcca7d.png)

    * You can register your own profile image at the 'user page'

   ![profileimg](https://user-images.githubusercontent.com/105581574/219038914-6905c6ca-04ec-45aa-bf21-fce04eae2627.png)
    
      
   
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
# 📚Extra Features

## 📌 Frontend

  * *media query*

    * Every page is designed in responsive style with the media query so that all of the services can be provided naturally on any device.

    ![image](https://user-images.githubusercontent.com/105581574/219059966-aa5e9e93-579d-4603-b057-3dd4a8e68c49.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/219060361-698f7485-de1a-472e-a6b2-35850772ad27.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/219060142-11f788b7-b05d-49f1-8f27-a963b6c6318f.png)
    
    ![image](https://user-images.githubusercontent.com/105581574/219061018-478188b9-98ca-4ee4-a0d4-adf706bcb94c.png)



  
  * *redux*

    * If each data response is requested everytime whenever the frontend needs it, the server gets much burden and the performace of the program will be hindered.

    * By saving data useful and irrelevant to security, such a problem can be solved. 

    * Furthermore, by using redux each entity in the frontend is managed in global state and can be called out in any component. 

      * file directory

      ![image](https://user-images.githubusercontent.com/105581574/219061771-97ea59f7-6573-46cc-bf43-7332314564c8.png)

      * comebine reducers

      ![image](https://user-images.githubusercontent.com/105581574/219062540-1aa3bf4b-864b-49e1-bf53-fc4964857991.png)

      * save data from the backend in the frontend using dispatchers

      ![image](https://user-images.githubusercontent.com/105581574/219063496-265a9d22-9adf-4c7e-bdcc-023463c52ddd.png)



## 📌 Backend

  * *Spring Security*

  * *Spring mail*
  
  * *Associative Relation*



