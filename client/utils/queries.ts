import { gql } from "@apollo/client";

export const GET_UNIVERSITIES = gql`
  query {
    universities {
      id
      name
      city
    }
  }
`;
