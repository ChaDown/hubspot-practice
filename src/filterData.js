import fetchData from './fetchData.js';

// Here I want to filter the data so it gives a JSON object with all asian countries names and their capital cities.

export async function filterData() {
  const data = await fetchData();

  let filteredData = [];

  // const newData = data.map((country, index) => {

  //   if (country.continents[0] === "Asia") {
  //     country[index] = {
  //       Country: {country.name.common},
  //       Capital: {country.capital[0],
  //     }
  //   }
  // })

  data.forEach((country) => {
    if (country.continents[0] === 'Asia') {
      filteredData.push({
        Country: country.name.common,
        Capital: country.capital,
      });
    }
  });

  console.log(filteredData);
}

filterData();
