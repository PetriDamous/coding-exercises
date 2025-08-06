import { gql } from "@apollo/client";

export const GET_SPEAKERS = gql`
  query Speakers($offset: Int, $limit: Int) {
    speakers(offset: $offset, limit: $limit) {
      datalist {
        id
        first
        last
        favorite
        fullName @client
        isChecked @client
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
      datalist {
        id
        cursor
        first
        last
        favorite
        fullName @client
      }
      pageInfo {
        totalItemCount
        lastCursor
        hasNextPage
      }
    }
  }
`;

export const GET_SESSIONS_CONCAT = gql`
  query SessionsConcat($limit: Int, $afterCursor: String) {
    sessionsConcat(limit: $limit, afterCursor: $afterCursor) {
      datalist {
        title
        room {
          capacity
          id
          name
        }
        id
        eventYear
        cursor
      }
      pageInfo {
        totalItemCount
        lastCursor
        hasNextPage
      }
    }
  }
`;
