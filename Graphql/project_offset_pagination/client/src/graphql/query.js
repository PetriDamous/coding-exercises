import { gql } from "@apollo/client";

export const GET_SPEAKERS = gql`
  query Speaker {
    speakers {
      dataSet {
        id
        last
        twitterHandle
        first
        favorite
        company
        bio
        fullName @client
        checkBoxColumn @client
      }
    }
  }
`;
