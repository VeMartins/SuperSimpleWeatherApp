
const btn = document.getElementById('searchBtn');


const getCity = () => {
	const input = document.getElementById('city');
	const valueInput = input.value;
	const ApiKey = 'ff1c7b2c2768bdabf88dcb2e61a2ba0b';
	const content = document.getElementById('content');

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&units=metric&appid=${ApiKey}`)
	.then((res) => res.json())
	.then(function(data) {
		return data;
	})
	.then((data) => {
		content.innerHTML = `
		   <div class="card mx-auto mt-5" style="width: 40rem; opacity: 0.7;">
            <div class="card-body justify-content-center border border-info border-3 style="width: 40rem;">

            	<h4 class="card-title text-dark fw-bold">Country: ${data.sys.country}</h4>
                <h5 class="card-title text-dark">${data.name}</h5>
                <h6 class="card-subtitle mb-2 fw-bold text-dark">Highs of ${data.main.temp_max}°C Lows of ${data.main.temp_min}°C</h6>
                <p class="card-text text-dark fw-bold">Weather conditions are described as: ${data.weather[0].description}</p>
                
            </div>
        </div>
		`
	})
	.catch(function(error) {
		console.log(error);
		content.innerHTML = `
		   <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
            	<h4 class="card-title text-dark fw-bold"> City Not Found </h4>
            </div>
        </div>
		`
	});
}

btn.addEventListener('click', getCity);
