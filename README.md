# wow-autobuyer
Buy items at desired price from World of Warcraft web auction house

How to use

1. Modify the desiredItemName and desiredItemPrice (in gold).
2. Open your favourite broswer in "Incognito mode" to prevent cookie saving.
3. Open WoW web auction house.
4. Open developer console.
5. Copy the buy_stuff.js contents into console.
6. Enjoy the things you just bought
7. Use printStatistics("Your desired item name here") in developer console to print out how many items have been bought.

Tip:
In your browser address bar set start=0 and end=200 (200 is the maximum number of items that is returned in web AH): 

/browse?filterId=-1&maxLvl=-1&start=0&qual=1&end=200&minLvl=-1&sort=quantity&reverse=false&n=fatty+bear

Note:
It's possible to make it fully automated by settings up browser extension, which let's you inject javascript into a page.
