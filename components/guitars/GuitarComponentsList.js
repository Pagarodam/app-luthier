import WoodsList from '../woods/woodsList';

const GuitarComponentsList = ({
  woods,
  label,
  onButtonClick,
  onEditWood,
  buttonColor,
  component,
  woodType,
}) => {
  const getWoodsByType = (components, componentsType) =>
    components.filter((wood) => wood.component === componentsType);

  const filteredWoods = getWoodsByType(woods, woodType);

  return (
    <div>
      {filteredWoods.length > 0 && (
        <WoodsList
          woods={filteredWoods}
          component={component}
          label={label}
          onButtonClick={onButtonClick}
          onEditWood={onEditWood}
          buttonColor={buttonColor}
        />
      )}
    </div>
  );
};

export default GuitarComponentsList;
