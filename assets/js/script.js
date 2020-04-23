


var getLocation = function() {
    var apiLocationUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-08-01&returnDate=2020-08-05&adults=2&includedAirlineCodes=TG&max=3";

    // https://test.api.amadeus.com/v2/reference-data/urls/checkin-links?airlineCode=1X" \
    //   -H "Authorization: Bearer CpjU0sEenniHCgPDrndzOSWFk5mN

    var  oAuthToken = "https://test.api.amadeus.com/v1/security/oauth2/token"


    fetch(oAuthToken, 
        {
        method : "POST",
        body : {
            grant_type : "client_credentials",
            client_id : "cFoJTq5iwLIpiwBQvmWjpgsHY2ON3CAy",
            client_secret: "QBxVw4TBoEbP2LfL"
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        
    }
    )
    .then(function(response) {
        if (response.ok) {

            // fetch(apiLocationUrl).then(function(response) {
            //     if(response.ok) {
            //         response.json().then(function(data){
            //             console.log(data);
            //         })
            //     }
            // })
            response.json().then(function(jsonResponse) {
                console.log(jsonResponse);

            })
            
        }
        else {
            alert("Error: " + response.statusText);
        }


    })
    .catch(function(error) {
        alert("Unable to connect to Amadeus")
    })
}

getLocation();
