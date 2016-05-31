# When-Pi-meet-BB-8

Project Setup.

Requirements:
1. node.js 
2. Raspberry Pi 3
3. network (I believe if you don't have that, you shouldn't be doing this)
4. a star war bb8 unit (AUD $250 ish)


Tech stack I used here:
Cylon.js 
Sphero SDK
Raspberry Pi raspbian-jessie latest image(builtin bluetooth support so I don't need to config blueman myself)

Node.js version
$node -v
V4.4.4

$npm -v
2.15.1

Install noble 
Strongly suggest to run those command first
$sudo apt-get update
$sudo apt-get dist-upgrade 

Make a coffee and comeback again
$sudo npm install noble -g (I install globally so I don't need to run sudo for the ble package installation)

Create project folder and install the rest node modules
npm install cylon cylon-api-http leapjs shpero
so the rest is get my app.js in.




