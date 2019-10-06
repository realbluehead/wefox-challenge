# WefoxChallenge

This project is part of the Wefox Challenge.

# Features

* The project is code with Typescript/Angular as required
* PostDTO is the DTO interface used everywhere in the project to refer to a Post.
* PostService is an injectuable service that makes all the crud operations with the API via the bundled HttpClient
* PostList component is the main component and show the list of posts. It also lets the user create a new post, show / edit and delete an existing post.
* Post component is the responsible for letting show, edit o create a new Post.
* An HttpInterceptor to handle the errors / loading state
* The show post action is not used but the service is implemented. That's because with the list posts I've already had the post that I wanted to show/edit.
* Although the router is installed, I decided that with the PostList components and three toggable modals (view, , create/edit, delete) I could do the CRUD operations in the same route and therefore simplifying the project.
* The create / edit form is a reactive form and I applied only the required validations for title and content and also applied some max-length restrictions. The Lat / Long fields could have their own validator if required but I decidec to focus on the main purpose of the project with the time I had.
* The css framework chosen is VMWare Clarity that is very stable and to be honest I'm a bit tired of Bootstrap / PrimeNg and Material so I decidec to choose something different and make some theming with the Wefox palette.
* To serve the application in Heroku there's a little server.js run by NodeJs that serves the static files (the build folder) (it's like a little nginx)

# Roadmap / WishList
If I had more time I would have added more features:
* I18n
* Lat/Long custom validators
* Maybe I would have internal routes to acces the different crud operations without having to go through the PostList Component


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Try it live

This project is auto deployed in Heroku every time a push is made to the master branch.
Go to `https://wefoxchallenge.herokuapp.com/` and play with it.

I may take a little the first time because the free plan of heroku sleeps the container when is not used in the last 20 minutes.