"use strict";
var Cylon = require('cylon');
var sphero = require('sphero');

var bb8 = sphero('f42cd0c87bac');
Cylon.api('http',{ssl:false});

Cylon.robot({
    connections: {
        loopback: { adaptor: 'loopback' }
    },

    devices: {
    	ping: { driver: 'ping' }
    },

    work: function() {
    	bb8.connect(function(){
	    console.log("Now connected to BB-8");
	    bb8.color(0x00FFF0);   
    	    console.log("bb-8 is started");   
	});

    },

    bb8start: function bb8start (my) 
    {
        bb8.color(0x00FFF0);   
    	console.log("bb-8 is started");   
    },

    bb8stop: function() {
	bb8.stop();
	bb8.color(0xFF000F);   
    	console.log("bb-8 is Stopped");
    },

    bb8foward: function bb8foward(my)
    {
        bb8.stop();
        bb8.color(0x0000FF);
        bb8.roll(160, 0,function()
        {
            console.log("bb-8 is moving foward");
        });        
    },
        
    bb8backward: function bb8backward(my)
    {
        bb8.stop();
        bb8.color(0x0000FF);
        bb8.roll(160, 180,function()
        {
            console.log("bb-8 is moving backward");
        });        
    },
        
    bb8left: function bb8left(my)
    {
        bb8.stop();
        bb8.color(0x0000FF);
        bb8.roll(160,270,function()
        {
            console.log("bb-8 is moving left");
        });
    },
        
    bb8right: function bb8right(my)
    {
        bb8.stop();
        bb8.color(0x0000FF);
        bb8.roll(160,90,function()
        {
            console.log("bb-8 is moving right");
        });
    },
});

Cylon.start();