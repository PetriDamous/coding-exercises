import { Speaker } from ".";

const SpeakerList = ({ data }) => {
  {
    return data.speakers.datalist.map(
      ({ id, first, last, favorite, fullName }) => {
        const speakerListProps = {
          id,
          first,
          last,
          favorite,
          fullName,
        };

        return <Speaker key={id} {...speakerListProps} />;
      }
    );
  }
};

export default SpeakerList;
