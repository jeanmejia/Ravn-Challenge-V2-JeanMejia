import { gql } from "@apollo/client";
export const LOAD_PEOPLE_INFO = gql`
    query ($personID: ID!){
        person (personID: $personID){
            name
            eyeColor
            hairColor
            skinColor
            birthYear
            vehicleConnection{
              vehicles{
                name
              }
            }
          }
    }
`