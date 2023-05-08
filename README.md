
#  Slot Machine - A Browser Game App
*A week-long group project as part of Codeclan E63*

## Project group members
Jon Minton, Gregorio Fumagalli, Paul Henstridge, Andrew Dyson

## Introduction
This is a brief for a browser game based on a slot machine game and broadly fitting the orginal codeclan project brief descirbed [here](https://github.com/codeclan/e63_classnotes/edit/main/week_09/day_4/JS%20Project%20briefs%2011.07.50%2011.08.59/browser_game.md).

This brief provides further information on the MVP and extensions for this specific app, which are not covered in the original brief.

## Project Aim
Replicate some of the features and functionality of a 1980s fruit based slot machine.
In such machines a user would add cash through a coin slot, press a button to cause three wheels to spin, have an option to pause any one or two of these wheels and recieve a cash payout if all three wheels showed the same fruit.  

## MVP

- A feature for user to add cash
- A feature for displaying user's current balance
- A feature for displaying three wheels, selecting random symbols from an array
    - including option to hold any of the wheels before next spin
- Option to register and select different users
    - registration option will include name and initial balance
    - select option will resume stored balance of selected user
- Option for user to cash out winnings
- Images for icons will be drawn from an API
- Visual display of win and loss streak

## EXTENSIONS

- Admin is allowed to adjust play options including
    - Cost per play
    - Value per win
    - Elements in wheel
- Display PNL for each user

## Uses of APIs

The app will make use of API calls in order to grab icons/gylphs for the elements in the wheel. 

## Uses of databases

The app will make use of databases in order to store user details and state.


## Intended tech stack

- **Front end**: React/Javascript, with HTML and CSS
- **Back End**: Express.js, MongoDb
