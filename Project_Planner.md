# Option 6: Smart TODO List

When you are recommended something it's not always easy to jot it down for later in an organized fashion. Adding the item to your phone or computer ends up taking time and opening up the right app is only part of the problem. You then have to locate the right list ("Movies to watch", "Books to read", etc.) to add to. And if you do get it in to the right list, you don't have much more context about it. This delay and lack of additional information acts as a huge deterrent.

The solution? A smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list.

Requirements:
Each todo created should be categorized as one of:

1.Film / Series (To watch)
2.Restaurants, cafes
3.Books (To read)
4.Products (To buy)
In order to determine the category the app will probably need to use various API services such as those offered by Google, Wolfram Alpha, Rotten Tomatoes, Amazon, Yelp and others.

API services mentioned above are only suggestions. You will have to investigate how to balance the accurate categorization of items with having to deal with multiple API endpoints.

Users should be able to change a category of an item in case it was mis-categorized or could not be categorized at all.

Users should be able to register, log in, log out and update their profile.

# ERD

Tables

•	Users: stores information about users of the system, including their name, email, and password.

•	Categories: stores information about different categories for items.

•	Items: stores information about the item created by users, including the category, user, item name, creation date, due date, completed date, priority, and the status of the item.

The relationship between these tables is as follows:

1.	One user can have multiple items, but each item is created by only one user, so the relationship between the users table and items table is a one-to-many relationship.

2.	One category can have multiple items, but each item belongs to only one category. So the relationship between the categories table and items table is a one-to-many relationship.

<img width="1357" alt="Screen Shot 2023-01-31 at 13 31 08" src="https://user-images.githubusercontent.com/36883798/215850715-d3b12b5a-cd43-4c0a-b239-6821bc848ca8.png">

# API

## Rotten Tomatoes
- Rotten Tomatoes no longer supports educational API's

## Yelp

https://docs.developer.yelp.com/docs/fusion-intro

- We can't store Yelp Data for more than 24 hours. Not sure we need this anyway.
- Maybe we ignore this as this is just for class.

## Google Books

https://developers.google.com/books/docs/overview


Javascript Library:

https://github.com/google/google-api-javascript-client

## The Movie DATABASE

https://www.themoviedb.org/documentation/api

## SerpAPI

https://serpapi.com/google-shopping-api

- Use this for google shopping. Only 100 requests so we may need to set up another account later.

Temp. Delete this later.
