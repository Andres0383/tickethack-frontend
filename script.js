document.querySelector('#searchButton').addEventListener('click',
    function () {
        const departure = document.querySelector('#departure').value;
        const arrival = document.querySelector('#arrival').value;
        const date = document.querySelector('#date').value;

        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({departure,arrival,date}),
        }).then((res) => res.json())
            .then(data => {
                console.log(data.trips)
                if (data.result) {
                    document.querySelector('.container2').innerHTML = ``
                    for (let i = 0; i < data.trips.length; i++) {

                        document.querySelector('.container2').innerHTML += `
                        <div className="tripResult">
                        <p class= "cityDeparture">${data.trips[i].departure}</p>
                        <p class= "cityArrival">${data.trips[i].arrival}</p>
                        <p class= "price">${data.trips[i].price}€</p>
                        <button class="Book">Book</>
                        </div>
                        `
                    }
                    } else {
                        document.querySelector('.container2').innerHTML = `
                        <div className="noResult">
                        <img src="./images/notfound.png" alt="loupe vide" />
                        <p>No trip found.</p>
                        </div>
                        `
                    }
            })
    })
