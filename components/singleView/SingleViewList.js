const SingleviewList = ({ order }) => {
  const date = new Date(order.date);
  console.log('order', order.products);
  return (
    <>
      <div className="p-3 bg-blue-100 m-5 shadow">
        <h2 className="font-bold">
          Fecha del pedido: {date.toLocaleDateString()}
        </h2>
        <div>
          {order.products.map(
            ({ product }) =>
              product && (
                <div key={product.id}>
                  <p>{product.name}</p>
                  <ul className="ml-5 list-disc">
                    <li>Aro: {product.aro.nameWood}</li>
                    <li>Tapa: {product.tapa.nameWood}</li>
                    <li>Fondo: {product.fondo.nameWood}</li>
                    <li>Diapason: {product.diapason.nameWood}</li>
                  </ul>
                </div>
              )
          )}
          <strong>Precio total: {order.price}€</strong>
        </div>
      </div>
    </>
  );
};

export default SingleviewList;
