
// variables to target the ids of the elements
var savedoutbounddate1El = document.querySelector("#saved-outbounddate1");
var savedoutbounddate2El = document.querySelector("#saved-outbounddate2");
var savedoutbounddate3El = document.querySelector("#saved-outbounddate3");

var savedinbounddate1El = document.querySelector("#saved-inbounddate1");
var savedinbounddate2El = document.querySelector("#saved-inbounddate2");
var savedinbounddate3El = document.querySelector("#saved-inbounddate3");

var savedorigin1El = document.querySelector("#saved-origin1");
var savedorigin2El = document.querySelector("#saved-origin2");
var savedorigin3El = document.querySelector("#saved-origin3");

var saveddestination1El = document.querySelector("#saved-destination1");
var saveddestination2El = document.querySelector("#saved-destination2");
var saveddestination3El = document.querySelector("#saved-destination3");

var savedairlinecode1 = document.querySelector("#saved-airlinecode1");
var savedairlinecode2 = document.querySelector("#saved-airlinecode2");
var savedairlinecode3 = document.querySelector("#saved-airlinecode3");

var savedprice1 = document.querySelector("#saved-price1");
var savedprice2 = document.querySelector("#saved-price2");
var savedprice3 = document.querySelector("#saved-price3");

var saveddirect1El = document.querySelector("#saved-direct1");
var saveddirect2El = document.querySelector("#saved-direct2");
var saveddirect3El = document.querySelector("#saved-direct3");

var saveddirectflighticon1 = document.querySelector("#saved-direct-flight-icon1");
var saveddirectflighticon2 = document.querySelector("#saved-direct-flight-icon2");
var saveddirectflighticon3 = document.querySelector("#saved-direct-flight-icon3");

var removeFlight1buttonEl = document.querySelector("#removeFlight1button");
var removeFlight2buttonEl = document.querySelector("#removeFlight2button");
var removeFlight3buttonEl = document.querySelector("#removeFlight3button");

var savedFlightCard1El = document.querySelector("#saved-flight-card-1");
var savedFlightCard2El = document.querySelector("#saved-flight-card-2");
var savedFlightCard3El = document.querySelector("#saved-flight-card-3");

var flightRowIdEl = document.querySelector("#row-id");


//function to reload the data onto the page from the localStorage and show it on the My Trips page
var getFlight1FromMyTrip = function() {


    //parse items from localStorage for Flight 1
    var startDateFlight1Display = JSON.parse(localStorage.getItem("startDateFlight1"));
    var endDateFlight1Display = JSON.parse(localStorage.getItem("endDateFlight1"));
    var fromLocationFlight1Display = JSON.parse(localStorage.getItem("fromLocationFlight1"));
    var toLocationFlight1Display = JSON.parse(localStorage.getItem("toLocationFlight1"));
    var carrierFlight1Display = JSON.parse(localStorage.getItem("carrierFlight1"));
    var priceFlight1Display = JSON.parse(localStorage.getItem("priceFlight1"));
    var directFlight1Display = JSON.parse(localStorage.getItem("directFlight1"));


    //get items from locaStorage for each item above
        var startDateFlight1DisplayItem
        for (var i = 0; i < startDateFlight1Display.length; i++) {
            startDateFlight1DisplayItem = startDateFlight1Display[0];
            // console.log(startDateFlight1DisplayItem);
        }

        var endDateFlight1DisplayItem
        for (var i = 0; i < endDateFlight1Display.length; i++) {
            endDateFlight1DisplayItem = endDateFlight1Display[0];
            // console.log(endDateFlight1DisplayItem);
        }

        var fromLocationFlight1DisplayItem
        for (var i = 0; i < fromLocationFlight1Display.length; i++) {
            fromLocationFlight1DisplayItem = fromLocationFlight1Display[0];
            // console.log(fromLocationFlight1DisplayItem);
        }

        var toLocationFlight1DisplayItem
        for (var i = 0; i < toLocationFlight1Display.length; i++) {
            toLocationFlight1DisplayItem = toLocationFlight1Display[0];
            // console.log(toLocationFlight1DisplayItem);
        }

        var carrierFlight1DisplayItem
        for (var i = 0; i < carrierFlight1Display.length; i++) {
            carrierFlight1DisplayItem = carrierFlight1Display[0];
            // console.log(carrierFlight1DisplayItem);
        }

        var priceFlight1DisplayItem
        for (var i = 0; i < priceFlight1Display.length; i++) {
            priceFlight1DisplayItem = priceFlight1Display[0];
            // console.log(priceFlight1DisplayItem);
        }

        var directFlight1DisplayItem
        for (var i = 0; i < directFlight1Display.length; i++) {
            directFlight1DisplayItem = directFlight1Display[0];
            // console.log(directFlight1DisplayItem);
        }




    document.getElementById("saved-outbounddate1").innerHTML = "Outbound: " + startDateFlight1DisplayItem;
    document.getElementById("saved-inbounddate1").innerHTML = "Inbound: " + endDateFlight1DisplayItem;
    document.getElementById("saved-origin1").innerHTML = "Origin: " + fromLocationFlight1DisplayItem;
    document.getElementById("saved-destination1").innerHTML = "Destination: " + toLocationFlight1DisplayItem;
    document.getElementById("saved-airlinecode1").innerHTML = "Carrier: " + carrierFlight1DisplayItem;
    document.getElementById("saved-price1").innerHTML = "Price: $" + priceFlight1DisplayItem;
    document.getElementById("saved-direct1").innerHTML = "Direct Flight: " + directFlight1DisplayItem;

}


//function to reload the data for the second trip onto the page from the localStorage and show it on the My Trips page
var getFlight2FromMyTrip = function() {


    //parse items from localStorage for Flight 1
    var startDateFlight2Display = JSON.parse(localStorage.getItem("startDateFlight2"));
    var endDateFlight2Display = JSON.parse(localStorage.getItem("endDateFlight2"));
    var fromLocationFlight2Display = JSON.parse(localStorage.getItem("fromLocationFlight2"));
    var toLocationFlight2Display = JSON.parse(localStorage.getItem("toLocationFlight2"));
    var carrierFlight2Display = JSON.parse(localStorage.getItem("carrierFlight2"));
    var priceFlight2Display = JSON.parse(localStorage.getItem("priceFlight2"));
    var directFlight2Display = JSON.parse(localStorage.getItem("directFlight2"));


    //get items from locaStorage for each item above
        var startDateFlight2DisplayItem

        if (startDateFlight2Display.length !== null ) {
            for (var i = 0; i < startDateFlight2Display.length; i++) {
                startDateFlight2DisplayItem = startDateFlight2Display[0];
                console.log(startDateFlight2DisplayItem);
            }  
        }
        

        var endDateFlight2DisplayItem
        for (var i = 0; i < endDateFlight2Display.length; i++) {
            endDateFlight2DisplayItem = endDateFlight2Display[0];
            // console.log(endDateFlight2DisplayItem);
        }

        var fromLocationFlight2DisplayItem
        for (var i = 0; i < fromLocationFlight2Display.length; i++) {
            fromLocationFlight2DisplayItem = fromLocationFlight2Display[0];
            // console.log(fromLocationFlight2DisplayItem);
        }

        var toLocationFlight2DisplayItem
        for (var i = 0; i < toLocationFlight2Display.length; i++) {
            toLocationFlight2DisplayItem = toLocationFlight2Display[0];
            // console.log(toLocationFlight2DisplayItem);
        }

        var carrierFlight2DisplayItem
        for (var i = 0; i < carrierFlight2Display.length; i++) {
            carrierFlight2DisplayItem = carrierFlight2Display[0];
            // console.log(carrierFlight2DisplayItem);
        }

        var priceFlight2DisplayItem
        for (var i = 0; i < priceFlight2Display.length; i++) {
            priceFlight2DisplayItem = priceFlight2Display[0];
            // console.log(priceFlight2DisplayItem);
        }

        var directFlight2DisplayItem
        for (var i = 0; i < directFlight2Display.length; i++) {
            directFlight2DisplayItem = directFlight2Display[0];
            // console.log(directFlight2DisplayItem);
        }




    document.getElementById("saved-outbounddate2").innerHTML = "Outbound: " + startDateFlight2DisplayItem;
    document.getElementById("saved-inbounddate2").innerHTML = "Inbound: " + endDateFlight2DisplayItem;
    document.getElementById("saved-origin2").innerHTML = "Origin: " + fromLocationFlight2DisplayItem;
    document.getElementById("saved-destination2").innerHTML = "Destination: " + toLocationFlight2DisplayItem;
    document.getElementById("saved-airlinecode2").innerHTML = "Carrier: " + carrierFlight2DisplayItem;
    document.getElementById("saved-price2").innerHTML = "Price: $" + priceFlight2DisplayItem;
    document.getElementById("saved-direct2").innerHTML = "Direct Flight: " + directFlight2DisplayItem;

}


//function to reload the data for the third trip onto the page from the localStorage and show it on the My Trips page
var getFlight3FromMyTrip = function() {


    //parse items from localStorage for Flight 1
    var startDateFlight3Display = JSON.parse(localStorage.getItem("startDateFlight3"));
    var endDateFlight3Display = JSON.parse(localStorage.getItem("endDateFlight3"));
    var fromLocationFlight3Display = JSON.parse(localStorage.getItem("fromLocationFlight3"));
    var toLocationFlight3Display = JSON.parse(localStorage.getItem("toLocationFlight3"));
    var carrierFlight3Display = JSON.parse(localStorage.getItem("carrierFlight3"));
    var priceFlight3Display = JSON.parse(localStorage.getItem("priceFlight3"));
    var directFlight3Display = JSON.parse(localStorage.getItem("directFlight3"));


    //get items from locaStorage for each item above
        var startDateFlight3DisplayItem
        for (var i = 0; i < startDateFlight3Display.length; i++) {
            startDateFlight3DisplayItem = startDateFlight3Display[0];
            // console.log(startDateFlight3DisplayItem);
        }

        var endDateFlight3DisplayItem
        for (var i = 0; i < endDateFlight3Display.length; i++) {
            endDateFlight3DisplayItem = endDateFlight3Display[0];
            // console.log(endDateFlight3DisplayItem);
        }

        var fromLocationFlight3DisplayItem
        for (var i = 0; i < fromLocationFlight3Display.length; i++) {
            fromLocationFlight3DisplayItem = fromLocationFlight3Display[0];
            // console.log(fromLocationFlight3DisplayItem);
        }

        var toLocationFlight3DisplayItem
        for (var i = 0; i < toLocationFlight3Display.length; i++) {
            toLocationFlight3DisplayItem = toLocationFlight3Display[0];
            // console.log(toLocationFlight3DisplayItem);
        }

        var carrierFlight3DisplayItem
        for (var i = 0; i < carrierFlight3Display.length; i++) {
            carrierFlight3DisplayItem = carrierFlight3Display[0];
            // console.log(carrierFlight3DisplayItem);
        }

        var priceFlight3DisplayItem
        for (var i = 0; i < priceFlight3Display.length; i++) {
            priceFlight3DisplayItem = priceFlight3Display[0];
            // console.log(priceFlight2DisplayItem);
        }

        var directFlight3DisplayItem
        for (var i = 0; i < directFlight3Display.length; i++) {
            directFlight3DisplayItem = directFlight3Display[0];
            // console.log(directFlight2DisplayItem);
        }




    document.getElementById("saved-outbounddate3").innerHTML = "Outbound: " + startDateFlight3DisplayItem;
    document.getElementById("saved-inbounddate3").innerHTML = "Inbound: " + endDateFlight3DisplayItem;
    document.getElementById("saved-origin3").innerHTML = "Origin: " + fromLocationFlight3DisplayItem ;
    document.getElementById("saved-destination3").innerHTML = "Destination: " + toLocationFlight3DisplayItem;
    document.getElementById("saved-airlinecode3").innerHTML = "Carrier: " + carrierFlight3DisplayItem;
    document.getElementById("saved-price3").innerHTML = "Price: $" + priceFlight3DisplayItem;
    document.getElementById("saved-direct3").innerHTML = "Direct Flight: " + directFlight3DisplayItem;

}



//function to remove items from localStorage on button click for the first flight
var removeFlight1FromMyTrip = function() {
    //remove items from localStorage for Flight 1
    localStorage.removeItem("startDateFlight1");
    localStorage.removeItem("endDateFlight1");
    localStorage.removeItem("fromLocationFlight1");
    localStorage.removeItem("toLocationFlight1");
    localStorage.removeItem("carrierFlight1");
    localStorage.removeItem("priceFlight1");
    localStorage.removeItem("directFlight1");


    // savedFlightCard1.classList.add("hidden");

}

//function to remove items from localStorage on button click for the second flight
var removeFlight2FromMyTrip = function() {
    //remove items from localStorage for Flight 1
    localStorage.removeItem("startDateFlight2");
    localStorage.removeItem("endDateFlight2");
    localStorage.removeItem("fromLocationFlight2");
    localStorage.removeItem("toLocationFlight2");
    localStorage.removeItem("carrierFlight2");
    localStorage.removeItem("priceFlight2");
    localStorage.removeItem("directFlight2");

    // savedFlightCard2.classList.add("hidden");
}

//function to remove items from localStorage on button click for the third flight
var removeFlight3FromMyTrip = function() {
    //remove items from localStorage for Flight 1
    localStorage.removeItem("startDateFlight3");
    localStorage.removeItem("endDateFlight3");
    localStorage.removeItem("fromLocationFlight3");
    localStorage.removeItem("toLocationFlight3");
    localStorage.removeItem("carrierFlight3");
    localStorage.removeItem("priceFlight3");
    localStorage.removeItem("directFlight3");

    // savedFlightCard3.classList.add("hidden");
}



// var removeFlightCard1Element = function (savedFlightCard1El){
//     document.getElementById(savedFlightCard1El);
//     flightRowIdEl.removeChild(savedFlightCard1El);
// }

// function removeItem(savedFlightCard1El){
//     var itemToRemove = document.getElementById(savedFlightCard1El);
//     itemToRemove.parentNode.removeChild(itemToRemove);
// }
    



getFlight1FromMyTrip();
getFlight2FromMyTrip();
getFlight3FromMyTrip();


//event listener for flight 1 button so that it removes data to local storage for the 1st flight
removeFlight1buttonEl.addEventListener("click", removeFlight1FromMyTrip)
// //event listener for flight 2 button so that it removes data to local storage for the 2nd flight
removeFlight2buttonEl.addEventListener("click", removeFlight2FromMyTrip)
// //event listener for flight 3 button so that it removes data to local storage for the 3rd flight
removeFlight3buttonEl.addEventListener("click", removeFlight3FromMyTrip)

