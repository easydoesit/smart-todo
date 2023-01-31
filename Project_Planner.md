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
