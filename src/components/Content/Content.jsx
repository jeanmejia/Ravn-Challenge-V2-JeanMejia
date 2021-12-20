import React, { useEffect, useState } from 'react';
import './Content.css'
import { useQuery, gql } from '@apollo/client'
import { LOAD_PEOPLE_INFO } from '../../GraphQL/InfoQuery';
import { useParams } from 'react-router-dom';

function Content() {
    var key = useParams();
    console.log(key);


    const { error, loading, data } = useQuery(LOAD_PEOPLE_INFO, { variables: { personID: key.ID } });
    const [person, setPerson] = useState([])
    const [vehicle, setVehicle] = useState([])
    
    useEffect(() => {
        if (data) {
            setPerson(data.person)
            setVehicle(data.person.vehicleConnection.vehicles)
            console.log(vehicle)
//            console.log(data.person.vehicleConnection);
        }
    }, [data]);
    return (
        <div className='content'>
            <div >
                <h2 className='title'>General Information</h2>
                <div className='cell'>
                    <p className='subTitle'>Eye Color</p><p className='ans'>{person.eyeColor}</p>
                </div>
                <div className='cell'>
                    <p className='subTitle'>Hair Color</p><p className='ans'>{person.hairColor}</p>
                </div>
                <div className='cell'>
                    <p className='subTitle'>Skin Color</p><p className='ans'>{person.skinColor}</p>
                </div>
                <div className='cell'>
                    <p className='subTitle'>Birth Year</p><p className='ans'>{person.birthYear}</p>
                </div>

            </div>
            <div>
                <h2 className='title'>Vehicles</h2>
                {   
                    vehicle.map((val, key) => {
                        return (
                            <p className='cell' key={key}>{val.name}</p>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Content;