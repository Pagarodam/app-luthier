const SingleviewList = ({ order, onClick, n }) => {
  const date = new Date(order.date);
  console.log(order, 'order');
  return (
    <>
      <div
        className="p-3 bg-blue-100 m-5 shadow"
        // onClick={() => onClick(order.products, order.id)}
      >
        <h2 className="font-bold">
          Fecha del pedido: {date.toLocaleDateString()}
        </h2>
        <div>
          {/* <div className="flex">Contenido</div> */}
          {order.products.map(({ product }) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <ul className="ml-5 list-disc">
                <li>Aro: {product.aro.nameWood}</li>
                <li>Tapa: {product.tapa.nameWood}</li>
                <li>Fondo: {product.fondo.nameWood}</li>
                <li>Diapason: {product.diapason.nameWood}</li>
              </ul>
            </div>
          ))}
          <strong>Precio total: {order.price}€</strong>
        </div>
        {/* <table key={order.id}>
          <thead>
            <tr>
              <th className="border-2 border-black m-4 p-4"># </th>
              <th className="border-2 border-black m-4 p-4">Fecha </th>
              <th className="border-2 border-black m-4 p-4">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {n}
              </td>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {date.toLocaleDateString()}
              </td>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {order.price}
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default SingleviewList;
