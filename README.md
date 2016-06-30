# When-Pi-meet-BB-8

Project Setup.

##Requirements:
>1. node.js 
>2. Raspberry Pi 3
>3. network (I believe if you don't have that, you shouldn't be doing this)
>4. a star war bb8 unit (AUD $250 ish)

##Tech stack I used here:
>Cylon.js 
>Sphero SDK
>Raspberry Pi raspbian-jessie latest image(builtin bluetooth support so I don't need to config blueman myself)
>Node.js version V4.4.4
>npm version 2.15.1

##Install noble 
Strongly suggest to run those command first
```bash
$sudo apt-get update
$sudo apt-get dist-upgrade 
```

##Make a coffee and comeback again
```bash
$sudo npm install -g noble 
```
(I install globally so I don't need to run sudo for the ble package installation)

Create project folder and install the rest node modules

```bash
npm install cylon cylon-api-http leapjs shpero
```
so the rest is get my app.js in.

<p>
<code>
var bb8 = sphero('f42cd0c87bac');
</code>
</p>
the param is my bb8's mac address. 
it's easy to get that via bluetooth scan.
Run the app
```bash
$sudo node app.js
```

then in browser 
http://127.0.0.1:3000 

so a swagger like web api on Raspberry pi for robot :) enjoy.

