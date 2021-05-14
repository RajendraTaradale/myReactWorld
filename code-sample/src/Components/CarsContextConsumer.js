import React from 'react'
import MyContext from './Context/MyContext';

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementPrice(carID)}
                        decrementPrice={() => context.decrementPrice(carID)}
                    />
                ))}
            </>
        )}
    </MyContext.Consumer>
);

export default Cars;

const Car = props => (
    <>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </>
);