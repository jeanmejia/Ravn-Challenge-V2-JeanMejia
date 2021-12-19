import { gql } from "@apollo/client";
export const LOAD_PEOPLE = gql`
    query {
        allPeople{
            people{
                name
                species{
                    name
                }
                homeworld{
                    name
                } 
            }
        }
    }
`