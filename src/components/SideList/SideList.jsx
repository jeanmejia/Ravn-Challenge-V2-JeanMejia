import React, { useEffect, useState } from 'react';
import './SideList.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { useQuery, gql } from '@apollo/client'
import { LOAD_PEOPLE } from '../../GraphQL/Queries';

function SideList() {

    const { error, loading, data } = useQuery(LOAD_PEOPLE)
    const [people, setPeople] = useState([])
    useEffect(() => {
        if (data) {
            setPeople(data.allPeople.people);
            console.log(data.allPeople.people);
        }
    }, [data]);
    return (
        <div className='sideBar'>
            {people.map((val, key) => {
                return (
                    <div className='item'>
                        <div>
                            <h5>{val.name}</h5>
                            <p>{val.species === null ? 'Human': val.species.name} from {val.homeworld.name}</p>
                        </div >
                        <IconContext.Provider value={{ color: "black", size: "25"}}>
                            <div className='icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </IconContext.Provider>
                    </div>
                );
            })}
        </div>

    );
}
export default SideList;