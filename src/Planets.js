export const Planet = (props) =>{
    return (
    <div>
      <h1>{props.name} - {props.isGasPlanet?"Gas planet":""}</h1>
    </div>);
};