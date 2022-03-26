const Woods = ({ id, nameWood, price }) => {
  return (
    <div key={id}>
      <h4>{nameWood}</h4>
      <p>{price}</p>
    </div>
  );
};

export default Woods;
