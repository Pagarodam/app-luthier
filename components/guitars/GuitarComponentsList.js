import WoodsList from '../woods/woodsList';

const getWoodsByType = (woodList, woodType) =>
  woodList.filter((wood) => wood.component === woodType);

const GuitarComponentsList = (props) => {
  const tapas = getWoodsByType(props.woods, 'tapa');
  const fondos = getWoodsByType(props.woods, 'fondo');
  const aros = getWoodsByType(props.woods, 'aro');
  const diapasones = getWoodsByType(props.woods, 'diapason');

  return (
    <div>
      {tapas.length > 0 && (
        <WoodsList
          woods={tapas}
          component={'Tapas'}
          label={props.label}
          onWoodDeleted={props.onWoodDeleted}
          onEditWood={props.onEditWood}
          buttonColor={props.buttonColor}
        />
      )}
      {aros.length > 0 && (
        <WoodsList
          woods={aros}
          component={'Aros'}
          label={props.label}
          onWoodDeleted={props.onWoodDeleted}
          onEditWood={props.onEditWood}
          buttonColor={props.buttonColor}
        />
      )}
      {fondos.length > 0 && (
        <WoodsList
          woods={fondos}
          component={'Fondo'}
          label={props.label}
          onWoodDeleted={props.onWoodDeleted}
          onEditWood={props.onEditWood}
          buttonColor={props.buttonColor}
        />
      )}
      {diapasones.length > 0 && (
        <WoodsList
          woods={diapasones}
          component={'Diapason'}
          label={props.label}
          onWoodDeleted={props.onWoodDeleted}
          onEditWood={props.onEditWood}
          buttonColor={props.buttonColor}
        />
      )}
    </div>
  );
};

export default GuitarComponentsList;
