import React, { useEffect, useState } from 'react';
import './SideList.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons/lib';
import { useQuery, gql } from '@apollo/client'
import { LOAD_PEOPLE } from '../../GraphQL/Queries';
import {Link} from 'react-router-dom';


function SideList() {
    
    const { error, loading, data } = useQuery(LOAD_PEOPLE)
    const [people, setPeople] = useState([])
    useEffect(() => {
        if (data) {
            setPeople(data.allPeople.people);
        }
    }, [data]);
    return (
        <div className='sideBar'>
            {data? null :<div style={{width:"100%", textAlign:"center", verticalAlign:"middle" }}>Loading...</div>}
            {people.map((val, key) => {
                return (
                    <div className='item'  >
                        
                        <div>
                            <h5>{val.name}</h5>
                            <p>{val.species === null ? 'Human': val.species.name} from {val.homeworld.name}</p>
                        </div >
                        <IconContext.Provider value={{ color: "black", size: "25"}}>
                            <Link to={`/info/`+ (parseInt(key)+1)}>
                            <div className='icon' >
                                <MdKeyboardArrowRight />
                            </div>
                            </Link>
                        </IconContext.Provider>
                    </div>
                );
            })}
        </div>

    );
}
export default SideList;