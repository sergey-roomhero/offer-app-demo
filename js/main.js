// Import JSON Data
async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("JSON loading error: ${response.status}`);
  }
  return await response.json();
}

const clientsDataPromise = fetchJSON("data/clients.json");
const productsDataPromise = fetchJSON("data/products.json");
const ordersDataPromise = fetchJSON("data/orders.json");

Promise.all([clientsDataPromise, productsDataPromise, ordersDataPromise])
  .then(([clientsData, productsData, ordersData]) => {
    console.log("Clients Data:", clientsData);
    console.log("Products Data:", productsData);
    console.log("Orders Data:", ordersData);

  })
  .catch((error) => {
    console.error("Произошла ошибка при загрузке данных:", error);
  });
