let total = 0;

function getHeaders() {
  return {
    Accept: "application/json",
    "Content-type": "application/json",
    //'Authorization': localStorage.token
  };
}

async function cargarProductos() {
  const request = await fetch("http://192.168.1.25:8095/api/product/findAll", {
    method: "GET",
    headers: getHeaders(),
  });
  const productos = await request.json();
  for (producto of productos) {
    console.log(producto.id + " " + producto.price);
    total += producto.price;
  }

  console.log(total);
}

async function findProducto(id) {
  const request = await fetch(
    "http://192.168.1.25:8095/api/product/find/" + id,
    {
      method: "GET",
      headers: getHeaders(),
    }
  );

  let jsonData = [];

  producto = await request.json();

  // producto = {
  //     "name": nombre,
  //     "price": precio,
  //     "maker": {
  //       "id": fabricanteId
  //     }
  //   };

  jsonData.push(producto);

  for (producto of jsonData) {
    console.log(producto.id + " " + producto.price + " " + producto.name);
    total += producto.price;
  }
   
}
console.log(total);
for (let i=1;i<=5;i++){
findProducto(i);
}

