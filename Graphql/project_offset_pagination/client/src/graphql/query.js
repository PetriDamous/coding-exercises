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

export const GET_SPEAKERS_CONCAT = gql`
  query SpeakersConcat($afterCursor: String, $limit: Int) {
    speakersConcat(afterCursor: $afterCursor, limit: $limit) {
      dataSet {
        id
        first
        last
        favorite
        fullName @client
        checkBoxColumn @client
      }
      pageInfo {
        totalItemCount
        lastCursor
        hasNextPage
      }
    }
  }
`;
