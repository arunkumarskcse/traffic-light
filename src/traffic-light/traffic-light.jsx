import { useState, useEffect } from 'react';
import "./style.css";

function TrafficLight({ data }) {

    const displayData = sortedDispayLight(data);
    const orderData = sortedOrderLight(data);

    const [displayLight, setDisplayLight] = useState(displayData);
    const [orderLight, setOrderLight] = useState(orderData);

    const [activeLight, setActiveLight] = useState(orderLight[0]);


    function sortedDispayLight(order) {
        return order.toSorted(function (a, b) {
            return a.displayOrder - b.displayOrder
        })
    }

    function sortedOrderLight(order) {
        return order.toSorted(function (a, b) {
            return a.order - b.order
        })
    }

    useEffect(()=> {

        setTimeout(() => {

            // change the light 
            const currentLightIndex = orderLight.findIndex((l)=> l.color === activeLight.color)
            const nextLightIndex = currentLightIndex + 1;
            const nextLight = orderLight[nextLightIndex] ?? orderLight[0];
            setActiveLight(nextLight);
            
        }, activeLight.time);

    },[activeLight])


    return (
        <div className='traffic-light' style={{marginTop: '100px'}}>

            {displayLight.map((light)=> {
                return (
                    <Light key={light.color} color={light.color} activeColor={activeLight.color}/>
                )
            })}

        </div>
    )

}

function Light ({color, activeColor}) {
    const opacity = color === activeColor ? 1 : 0.2;
    return <div style={{backgroundColor: color, opacity}} className='light'/>
}

export default TrafficLight;