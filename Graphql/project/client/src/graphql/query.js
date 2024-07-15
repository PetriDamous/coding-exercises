import { gql } from "@apollo/client";

export const GET_SPEAKERS = gql`
query Speakers {
  speakers {
    bio
    company
    favorite
    first
    id
    last
    twitterHandle
  }
}
`;
