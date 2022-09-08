const countryData = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  // for (const countries of country){
  //     console.log(countries)
  const countryContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("country");
    createDiv.innerHTML = `
   <h3>Country Name: ${country.name.common}</h3>
   <h4>Capital:  ${country.capital ? country.capital[0] : "No Capital"}</h4>
   <button onclick="loadCountryDetail('${country.cca2}')">Show details</button>
   `;
    countryContainer.appendChild(createDiv);
  });
};
const loadCountryDetail = (countryCode) => {
  //   console.log(countryCode);
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetail(data[0]));
};
const displayDetail = (country) => {
  //   console.log(country);
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
  <h2>Country Name: ${country.name.common}</h2>
  <img src="${country.flags.png}"></img>

  `;
};

countryData();
