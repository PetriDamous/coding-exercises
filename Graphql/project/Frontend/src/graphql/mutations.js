import { gql } from "@apollo/client";

export const TOGGLE_SPEAKER_FAVORITE = gql`
  mutation ToggleSpeakerFavrite($speakerId: ID!) {
    toggleSpeakerFavorite(speakerId: $speakerId) {
      id
      first
      last
      favorite
    }
  }
`;

export const DELETE_SPEAKER = gql`
  mutation DeleteSpeaker($speakerId: ID!) {
    deleteSpeaker(speakerId: $speakerId) {
      last
      id
      firstLast
      first
      favorite
    }
  }
`;

export const ADD_SPEAKER = gql`
  mutation AddSpeaker($speakerInput: SpeakerInput) {
    addSpeaker(input: $speakerInput) {
      last
      id
      firstLast
      first
      favorite
    }
  }
`;
