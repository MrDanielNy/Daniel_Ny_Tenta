<!-- Instructions -->
<p align="center">
  <a href="https://daniel-ny-webbapplikationer-och-mobil-utveckling.netlify.app">
    <img alt="Daniel Ny" src="https://daniel-ny-webbapplikationer-och-mobil-utveckling.netlify.app/static/421df43714dfdb0edac5b5a4693f911e/daniel_ny_avatar.png" width="60" />
  </a>
</p>
<h1 align="center">
  My project for the course "Webbapplikationer och mobil utveckling"
</h1>

# 🚀 How to use this project

1.  **Before using or editing this project you need a code editorn.**

    You will need to install a code-editor. A popular one is VSCode that is free to use and works on both PC and Mac.

2.  **Clone the site.**

    Either download as zip in the browser or use Git Clone

    ```shell
    #This will download the site
    git clone https://github.com/MrDanielNy/Daniel_Ny_Tenta.git
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and install all needed components and then start it up.

    ```shell
    cd Daniel_Ny_Tenta/
    npm install
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `Daniel_Ny_Tenta` directory in your code editor of choice and edit the files you need. For example in VSCode you can do this.

    ```shell
    #This opens VSCode in the current directory
    code .
    ```

<!-- Instructions end -->

<!-- About this project -->
# 🧐 What's changed in the project from the one we built together?

I built this from the ground up using our other project as rolemodell so most of it is the same although I've made changes to the layout and some to the styling. 

1. The Navbar switches between a regular one and a "burger menu" when the screen-size gets to small. Most of it is done using css-styling in Nav.js.

2. I've installed the plugin gatsby-background-image to be able to place text over images, namely my name and a 'tagline' over the feature-image on the front-page.

<!-- About this project end -->

<!-- "Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser" -->
# 👨‍🔬 Answer to the exam-question

In this text I will give my view on the assignment: "Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser"

## The what

There are plenty of options to choose from when deciding what routes to take when building a website. The first thing needed is to make a specifikation on what the site should contain and do. When you know what to build it's time to decide how.

## The how

I'm going to focus on three options here. There are plenty of other options as well and neither of this must be the perfect match for your project.

1. **Using HTML, CSS and vanilla javascript**

This is the most basic way of doing it and means you will get very little for free. Going back to the 90:s and early 2000 this was the only way of doing it (although there was editors to help it still needed a lot of coding) and if you want full controll and do everything from scratch this is the only way.

There are also libraries like Bootstrap to make things simpler when building a site without the more modern packages like react this also means that sites tend to be more similar in styling because a lot of sites get the same, prebuilt styling.

2. **Using PUG/Sass**

I must admit that of all of the options I write about here this is the one I'm the least experienced in. However, PUG is a smart and slim template-engine that lets you create html that is reusable. This in turn means that the code is less likely to get bugs and is easier to change and maintain. 
[Source: https://www.sitepoint.com/a-beginners-guide-to-pug/]

Sass in turn extends CSS and lets you do more and better than regular CSS. Howeber it lets you use ordinary CSS as well and that means you can mix and match between the different stylings as you see fit. [Source: Our lecture].

3. **Using React/Gatsby**

Before this course I had tried React out during the summer to learn more so I did a very simple project. React was created to make it easier to make reusable and betterlooking frontend due to the fact that they uses components and together with the markup-language JSX it's very simple to create a site and it's elements and at the same time make it more secure. 
[Source: https://reactjs.org/blog/2013/06/05/why-react.html] 

Gatsby, in the other hand, is an extension over react that aims to take care of all the husle when creating a site. Or, as one of the founders puts it: 
"...Gatsby adds all the surrounding pieces needed to make you instantly productive building websites. So a data layer to make it easy to pull in data from anywhere, a routing system so you can have pages, an optimized dev & production build setup, a ton of performance enhancements to speed the initial page load & while clicking around the site, and a rich set of APIs which almost 1,300 plugins have been built around." [Source: https://www.techrepublic.com/article/why-gatsbyjs-corporate-success-is-really-about-the-individual-developer-experience/]

## The conclusion

There is no straight-up answer to what to choose when creating a site because it depends heavily on what the site should do. However, if we concentrate on the site we're building right now all three options are valid. But, here are som considerations:

1. **What do you already know**
Do you have the time or need to learn something new? If you already know React then the combination with Gatsby seems like a easy choice and otherwise, if you do not want to learn React maybe a template engine like PUG might be the easier choice. However, if you see the site expanding and needing more functions then maybe it's better to start learing React directly.

2. **What do you think is the best approach to creation**
You can of course make PUG and React/Gatsby look like the other but the different approaches to how things are done make the difference when deciding what to use. And although React comes with bigger possibilities out of the box it might also seem a bit big at first sight. Also, Gatsby takes away a lot of the hurdles of React to make it really easy to get started quickly.

3. **Speed of production**
If you take the route of doing everything from scratch you have full control of everything and it's very easy to make changes when needed. When using something like Gatsby and finding a bug it might be quite a lot harder to fix things. However, considering how much you get for free when using i library like Gatsby and also React then there is a real timesaver and that time can be spent on either getting the site to look and feel even better or, if you are a company, make money faster. Reinventing the wheel everytime is rarely a good approach and neither is writing standard boilerplate over and over again. If that can be avoided it probarbly should be.

## Final thoughts.
Factoring in everything above as well as the experience gotten from this project I would say that React/Gatsby is probably the best way to go for a fast, scalable and good-looking site. The minor bad things that comes with letting go of the controll heavily overweights the positives and as React and Gatsby both have a very good community it also means it's easy to get help you get stuck


<!-- "Se samband och värdera alternativa lösningar vid val av programmeringsteknik vid utveckling av dynamiska webbplatser" end -->