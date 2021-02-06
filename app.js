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
                <button onClick="displayCountryDetail('${country.name}')">Details</button>
            `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0])); // array element
}
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">
    `
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
