import { gql } from "@apollo/client";

export const GET_SPEAKERS = gql`
  query Speakers {
    speakers {
      id
      first
      last
      favorite
    }
  }
`;
