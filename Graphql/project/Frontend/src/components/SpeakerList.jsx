import { Speaker } from ".";

const SpeakerList = ({ data, toggleSpeakerFavorite, deleteSpeaker }) => {
  {
    return data.speakers.datalist.map(({ id, first, last, favorite }) => {
      const speakerListProps = {
        toggleSpeakerFavorite,
        deleteSpeaker,
        id,
        first,
        last,
        favorite,
      };

      return <Speaker {...speakerListProps} />;
    });
  }
};

export default SpeakerList;
