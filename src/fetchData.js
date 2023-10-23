import fetch from 'node-fetch';

export default async function fetchData() {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    throw new Error(`Http error - status:${response.status}`);
  }

  const data = await response.json();

  return data;
}
