import { Speaker } from ".";

const SpeakerList = ({ data }) => {
  {
    return data.speakers.datalist.map((speakerListProps) => {
      const { id } = speakerListProps;
      return <Speaker key={id} {...speakerListProps} />;
    });
  }
};

export default SpeakerList;
