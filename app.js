fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

// parameter = countries
const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    // using forEach instead of for-loop
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'; // css class name
        const countryInfo = `
                <h3 class="country-name">${country.name}</h3>
                <p>${country.capital}</p>
            `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}

// for (let i = 0; i < countries.length; i++) {
    // country = countries[i];
    // }

/*const h3 = document.createElement('h3');
h3.innerText = country.name;
countryDiv.appendChild(h3);
const p = document.createElement('p');
p.innerText = country.capital;
countryDiv.appendChild(p);*/

// MAP returns array