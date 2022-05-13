import { Card } from '../UI/ImageCard';

const WoodsList = ({ woods, onWoodDeleted, component, ...props }) => {
  return (
    <>
      <h1 className="text-2xl rounded-l-lg mt-24 p-8 bg-blue-700 text-center font-bold leading-7 text-white-900  sm:text-3xl sm:truncate">
        {component}
      </h1>
      <div className="flex flex-wrap justify-around">
        {woods?.map((wood) => (
          <Card
            key={wood.id}
            id={wood.id}
            name={wood.nameWood}
            details={wood.quality}
            price={wood.price}
            image={wood.image}
            component={wood.component}
            style={wood.style}
            buttonLabel={props.label}
            buttonColor={props.buttonColor}
            onEditWood={props.onEditWood}
            onButtonClick={props.onButtonClick}
          />
        ))}
      </div>
    </>
  );
};

export default WoodsList;
