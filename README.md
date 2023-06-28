# tech-blog

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

I built a tech blog in order for the user to be able to create and post their thoughts, feelings, and opinions anything techology related and be able to comment on other people's post. This can be an easily and more convenient way to ask or answer questions or just share the latest project the user is working on with other people who are interested. Working through this, I learned how to utilize handlebars and adding css and javascript help make the page responsive and to make it more pleasing to the eye.

## Installation

In order to use this code you will need to install Node js. v16 and then in the integrated terminal you will need to type the following:
  - npm i init -y
  - npm i
  - npm i dotenv express mysql2 sequelize
  - npm i bcrypy
  - npm i express-handlebars
  - npm i express-session
  - npm i connect-session-sequelize

You also need to run the sql and seeds files, so to do that you will once again need to go into the integrated terminal, type in mysql -u root -p, enter your password, and source db/schema.sql to run the database. To run the seeds just type in npm run seeds and you are all set to run the code. 

## Usage

When you open the website, you are greeted with the dashboard that's either blank or have posts already made. If you clicked the login button on the top, you have the choice to login or sign up to create an account. Once you have done either of those you can make any comments on a post or go to the dashboard where you can create, modify, or delete your post. When you're done, you can logout of your account until you are ready to go back in.


## License

MIT License

Copyright (c) 2023 Nneif

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Links
Repo link: https://github.com/Nneifem/tech-blog
Webpage Link: https://nneif-tech-blog-14b4d011b29f.herokuapp.com/