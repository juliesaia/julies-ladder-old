<template>
    <div class="grid grid-cols-5 text-white">
        <img class=" col-start-2 col-span-3 my-5 mx-auto w-1/6" alt="Vue logo" src="../assets/AetherLadder.png" />
        <p class="text-3xl col-start-3 text-center">Julie's Ladder</p>
        <p class="text- col-start-3 text-center">Rivals of Aether Matchmaking Reimagined</p>
        
        

        <!-- <a type="button" href="http://aethersladder-env.eba-eu7qfapz.us-east-2.elasticbeanstalk.com/login" class="col-start-3 my-10 py-2 px-4  bg-indigo-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "></a> -->
        <a type="button" :href="backend_url +  'login'" class="col-start-3 my-10 py-2 px-4  bg-indigo-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Login with Steam
        </a>

        <!-- <router-link to="/login" 
        class="col-start-3 my-10 py-2 px-4  bg-indigo-800 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "

        >
        Login
        </router-link> -->
        

        
    </div>

    
<div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white">
                <img src="/no_discord.png"/>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            One Place for Matchmaking
        </h3>
        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            No need for hundreds of matchmaking Discord servers
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-6 md:mt-6 lg:mt-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white">
                <img src="/steam.png"/>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Steam Integration
        </h3>
        <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Join a lobby at the press of a button
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800" >
        <a href="https://twitter.com/CheesiestPotato" target="_blank">
        
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md  text-white">
                    <img src="/twitter.png"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4" >
                Follow me on Twitter
            </h3>
            <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
                {{andrew}}lease i wanna hit 700 followers just click this box please
            </p>
        </a>
    </div>
</div>

</template>

<script setup lang="ts">
import { nextTick, ref } from "vue"
const backend_url = import.meta.env.DEV ? "http://localhost:3000/" :  "https://julies-ladder.cheesypota.to/";
var andrew = ref('p');

nextTick(() => {
    "use strict";
    // Some key codes that are used
    var up = 38,
	    down = 40,
	    left = 37,
	    right = 39,
	    A = 65,
	    B = 66;
    // Full Konami Code obtained from: http://en.wikipedia.org/wiki/Konami_Code
    var	konamiCode = [up,up,down,down,left,right,left,right,B,A];
    // Deteted sequence. Empty by default
    var konamiDetected = [];

    // Attachs the function on an element (for a certain event)
    function attachCustomEvent(el, eventName, desiredFunction) {
	    if (el.addEventListener) {
		    el.addEventListener(eventName,desiredFunction,false);
	    // Old IE
	    } else {
		    el.attachEvent('on' + eventName,desiredFunction);
	    }
    }

    // Detachs the function on an element (for a certain event)
    function detachCustomEvent(el, eventName, desiredFunction) {
	    if (el.removeEventListener) {
		    el.removeEventListener(eventName,desiredFunction,false);
	    // Old IE
	    } else {
		    el.detachEvent('on' + eventName,desiredFunction);
	    }
    }

    // Function that is invoked after detecting the Konami Code
    function startUpKonami() {
	    // Prevent further detection (When removing this line the Konami code can be entered multiple times)
	    detachCustomEvent(document,"keydown",isKonamiKey);
	    konamiIsDetected();
    }

    // Function to detect whether the pressed key is part of the Konami Code
    function isKonamiKey(e) {
	    var evt = e || window.event;
        var key = evt.keyCode ? evt.keyCode : evt.which;
	    // Set to true before checking everything    
	    var codeOk = true;
        // Push the key
        konamiDetected.push(key);
        // Check if the key is valid or not
        if (konamiDetected.length < konamiCode.length) {
		    // Check that the values are Ok so far. If not clear the array
		    for (var i = 0, max = konamiDetected.length; i < max ; i++) {
        		if(konamiDetected[i] !== konamiCode[i]) {
	        		codeOk = false;
        		}
        	}
        	if (!codeOk) {
        		// Clean the array
        		konamiDetected = [];
        		// Push the just detected value inside the array
        		konamiDetected.push(key);
        	}
        } else if (konamiDetected.length === konamiCode.length) {
        	for (var j = 0, max = konamiDetected.length; j < max ; j++) {
        		if(konamiDetected[j] !== konamiCode[j]) {
	        		codeOk = false;
        		}
        	}
        	// Clean the array
        	konamiDetected = [];
        	if (codeOk) {
	        	startUpKonami();
        	}
        // This should never happen, but if it happens we clean the array
        } else {
	        konamiDetected = [];
        }
        // After everything has been checked show the resulting array after pressing such key
	    // console.log(konamiDetected);
    }

    // Attach the event detection to the whole document
    attachCustomEvent(document,"keydown",isKonamiKey);
});

// Function that is invoked after the konami code has been entered
function konamiIsDetected() {
	andrew.value = 'P'
}
</script>

<style>
</style>