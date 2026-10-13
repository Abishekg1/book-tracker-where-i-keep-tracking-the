# Book Tracker

Book Tracker is an app that helps people keep track of the books they want to read or have read.
It is designed for readers who want a simple way to organize their books by title and author.
Version 1 displays a form for entering book details,
shows the books in a list,
and keeps the list saved after the page is reloaded.

## How to use it

Enter a book title and author, then click Add book to add it to your list. 
Click a book's information to change its status between To read, Reading, and Finished.
Click Delete to remove a book from your list.

## What is a repo and a commit?

A repository (repo) is a place where a project's files and their history are stored. 
A commit is a saved snapshot of changes made to the project. 
Commits help developers track their progress and understand what has changed over time.

## What I learned

While building Book Tracker, I learned how to use JavaScript to add, delete, and update books on a webpage.
I also learned how to use local storage to save book data so it remains available after refreshing the page.

How the Data Is Stored

This page uses localStorage to save the book list in the browser. 
The storage key is defined in app.js, and the saveBooks() function saves the list using that key.

The data is stored locally in the browser, not on the internet or inside the HTML page itself. 
This means the list stays available when I reopen the page in the same browser, even after refreshing it.

If a friend opens the page in a different browser or on another computer, they will not see my saved list. 
Their browser has its own separate localStorage, so they will see their own saved books or an empty list if they haven't added any.
## Why a server

When a friend opens my page in a different browser, 
they will see their own book list or an empty list because `localStorage` is stored separately in each browser and is not shared over the internet.

A server can store and share the book list between users, 
but the frontend files `index.html`, `styles.css`, and `app.js` stay the same.