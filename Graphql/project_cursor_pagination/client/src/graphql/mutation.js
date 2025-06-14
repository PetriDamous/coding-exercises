import { gql } from "@apollo/client";

export const ADD_SPEAKERS = gql`
  mutation AddSpeaker($input: CreateSpeakerInput!) {
    addSpeaker(createSpeakerInput: $input) {
      id
      first
      last
      favorite
    }
  }
`;

export const TOGGLE_SPEAKER_FAVORITE = gql`
  mutation ToggleSpeakerFavorite($speakerId: ID!) {
    toggleFavSpeaker(speakerId: $speakerId) {
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
      id
      first
      last
      favorite
    }
  }
`;

export const UPDATE_SPEAKER = gql`
  mutation UpdateSpeaker($updateSpeakerInput: UpdateSpeakerInput!) {
    updateSpeaker(updateSpeakerInput: $updateSpeakerInput) {
      favorite
      first
      id
      last
    }
  }
`;
