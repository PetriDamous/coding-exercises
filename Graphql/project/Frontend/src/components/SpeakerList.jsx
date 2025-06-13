import { Speaker } from ".";

const SpeakerList = ({ data }) => {
  {
    return data.speakers.datalist.map(({ id, first, last, favorite }) => {
      const speakerListProps = {
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
