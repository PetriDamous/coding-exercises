import { gql } from "@apollo/client";

export const GET_SPEAKERS = gql`
  query Speaker($offset: Int, $limit: Int) {
    speakers(offset: $offset, limit: $limit) {
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
      pageInfo {
        totalItemCount
      }
    }
  }
`;
