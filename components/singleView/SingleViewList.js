const SingleviewList = ({ order, onClick, n }) => {
  return (
    <>
      <div
        className="p-2 hover:cursor-pointer"
        onClick={() => onClick(order.products)}
      >
        <table key={order.id}>
          <thead>
            <tr>
              <th className="border-2 border-black m-4 p-4"># </th>
              <th className="border-2 border-black m-4 p-4">Fecha </th>
              <th className="border-2 border-black m-4 p-4">Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {n}
              </td>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {order.date}
              </td>
              <td className="border-2 border-black m-4 p-4 hover:cursor-pointer hover:bg-blue-900">
                {order.id}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleviewList;
