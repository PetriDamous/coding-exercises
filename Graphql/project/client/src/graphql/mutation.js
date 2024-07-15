import { gql } from "@apollo/client";

export const ADD_SPEAKERS = gql`
  mutation AddSpeaker($input: SpeakerInput!) {
    addSpeaker(speakerInput: $input) {
      id
      first
      last
      favorite
    }
  }
`;

export const TOGGLE_SPEAKER_FAVORITE = gql`
  mutation ToggleSpeakerFavorite($speakerId: Int!) {
    toggleSpeakerFavorite(speakerId: $speakerId) {
      id
      first
      last
      favorite
    }
  }
`;

export const DELETE_SPEAKER = gql`
  mutation DeleteSpeaker($speakerId: Int!) {
    deleteSpeaker(speakerId: $speakerId) {
      id
      first
      last
      favorite
    }
  }
`;
