const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed579ac9f6mshda2537cce68811ep1bcb25jsnbf2e2060bf6b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const GetWeather = (city) => {
    cityName.innerHTML= city.toUpperCase()
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			temp.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	GetWeather(city.value)
})

GetWeather("Delhi")
const GetWeathersydney = ('sydney'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct1.innerHTML = response.cloud_pct
			feels_like1.innerHTML = response.feels_like
			humidity1.innerHTML = response.humidity
			max_temp1.innerHTML = response.max_temp
			min_temp1.innerHTML = response.min_temp
			sunrise1.innerHTML = response.sunrise
			sunset1.innerHTML = response.sunset
			temp1.innerHTML = response.temp
			wind_degrees1.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}

const GetWeatherchennai = ('chennai'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct2.innerHTML = response.cloud_pct
			feels_like2.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			max_temp2.innerHTML = response.max_temp
			min_temp2.innerHTML = response.min_temp
			sunrise2.innerHTML = response.sunrise
			sunset2.innerHTML = response.sunset
			temp2.innerHTML = response.temp
			wind_degrees2.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
const GetWeathertokyo = ('tokyo'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct3.innerHTML = response.cloud_pct
			feels_like3.innerHTML = response.feels_like
			humidity3.innerHTML = response.humidity
			max_temp3.innerHTML = response.max_temp
			min_temp3.innerHTML = response.min_temp
			sunrise3.innerHTML = response.sunrise
			sunset3.innerHTML = response.sunset
			temp3.innerHTML = response.temp
			wind_degrees3.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
const GetWeatherdubai = ('dubai'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct4.innerHTML = response.cloud_pct
			feels_like4.innerHTML = response.feels_like
			humidity4.innerHTML = response.humidity
			max_temp4.innerHTML = response.max_temp
			min_temp4.innerHTML = response.min_temp
			sunrise4.innerHTML = response.sunrise
			sunset4.innerHTML = response.sunset
			temp4.innerHTML = response.temp
			wind_degrees4.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
const GetWeatherbeijing = ('beijing'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=beijing', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct5.innerHTML = response.cloud_pct
			feels_like5.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			max_temp5.innerHTML = response.max_temp
			min_temp5.innerHTML = response.min_temp
			sunrise5.innerHTML = response.sunrise
			sunset5.innerHTML = response.sunset
			temp5.innerHTML = response.temp
			wind_degrees5.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
const GetWeathercairo = ('cairo'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=cairo', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct6.innerHTML = response.cloud_pct
			feels_like6.innerHTML = response.feels_like
			humidity6.innerHTML = response.humidity
			max_temp6.innerHTML = response.max_temp
			min_temp6.innerHTML = response.min_temp
			sunrise6.innerHTML = response.sunrise
			sunset6.innerHTML = response.sunset
			temp6.innerHTML = response.temp
			wind_degrees6.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}
const GetWeatherchicago = ('chicago'); {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chicago', options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			cloud_pct7.innerHTML = response.cloud_pct
			feels_like7.innerHTML = response.feels_like
			humidity7.innerHTML = response.humidity
			max_temp7.innerHTML = response.max_temp
			min_temp7.innerHTML = response.min_temp
			sunrise7.innerHTML = response.sunrise
			sunset7.innerHTML = response.sunset
			temp7.innerHTML = response.temp
			wind_degrees7.innerHTML = response.wind_degrees
		})
		.catch(err => console.error(err));
}