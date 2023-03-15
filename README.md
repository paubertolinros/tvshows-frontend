# TV shows frontend 🎬

Well well well if it isn't your first full-stack MERN application little ironhacker... 😏 Couldn't be more proud of you! 

![](homer.gif)

Anyway, let's get to work!

### First steps:

![](docs/warning.png)

 1. ⚠️ Make sure your `tvshows rest-api` is finished and all the routes tested with Postman. **Both the backend and MONGO must be running** for the frontend to work, so open them up.
 2. Change the name of the `sample.env` for `.env`. Look at the content: **if your backend is running on a port that is NOT 8080, change the port on the `.env` of the frontend to make sure the frontend is pointing to the right backend port.**
 3. The `showService` implies that the endpoint for shows in your backend is `/shows`. If it's not the case, change it in the `showService` file (line 6).

 Once you have checked these points out, you just need to run:

```bash
npm install
npm start
```

---

## Iteration 1: navigation 🛳

> 💡 You already have the routes defined on `App.jsx`.

Complete the Navbar component with the following `NavLink`s:

- Home
- New show
- Go back

Remember to import the navbar in the `App.jsx` file.

---

## Iteration 2: Home 🏠

The `Home` view:

- When the view `Home` first renders, it should make a call to the API, to the endpoint that gets all the shows. **Make sure your backend is running for this to work**. 
- You already have this method created in the showService, you just need to import it and use it.
- It should save the data obtained into a state.
- It should display a list of Cards. Each Card should only display the image of the show and the title, and the title should be a link to the detail (this route is created as *'/shows/:id'*).

> 💡 Finish and use the `Card` component that you have in the folder /components for this iteration.

---

## Iteration 3: The show page 🍿

The `Show` view:

- Should read the ID that is passed to it via parameters, using the `useParams` hook. It is already imported.
- When it first renders, it should make a call to the API to retrieve information of that particular show. This method is **not** ready in the `showService`, you will have to implement it.
- Once the call is done, it should store the information in a state
- It should display the show's information with all the details.
- It should have two buttons: 
1. One to **edit** the tv show, that will be a link with the ID and it will redirect to the edit view.
2. One to **delete** the tv show, that will have an `onClick` event that will fire a `handleDelete` event. When this button is clicked, the show should be deleted on the database, and then the user should be redirected to the Home view ('/'). 

---

## Iteration 4: The create show 🪅

The `New` view should:

- Have a state that will store the data of the new tv show
- Have a form, with an input with each one of the fields of the show.
- Have a `handleSubmit` event that will make a call to the API and create the new show. Then, the user will be redirected to the show's detail view.

---

## Iteration 5: Edit show ✏️

The `Edit view` has all the previous elements together in one view (*final boss*).

- It should receive via params the ID of the show we are editing 
> Note: this part comes form the Show.jsx component. If you are not receiving the show._id, the problem is there.
- You should capture this parameter via the `useParams` hook
- When the view first renders, it should make a call to the API to obtain the information of that particular show (get single show, via the showService). This information should be stored into the state.
- The view should display a form with the information of the show (obtained from the state).
- The view should have a `handleChange` function that will update the state when the user updates the information.
- The view should have a `handleSubmit` function that will send the new information (stored in the state) to the backend via the showService and will redirect the user to the show's detail view.

💙 Happy codi.. I mean, *with much love*,

*Ale*


