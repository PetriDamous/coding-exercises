import { useQuery } from "@apollo/client";
import Speaker from "./Speaker.jsx";
import { GET_SPEAKERS } from "../graphql/query";

const SpeakerList = () => {
  const { loading, error, data } = useQuery(GET_SPEAKERS);

  if (loading) return <div className="col-sm6">Loading...</div>;

  if (error) return <div className="col-sm6">Error</div>;

  return (
    <>
      {data?.speakers.dataSet.map((speaker) => {
        return <Speaker key={speaker.id} speaker={speaker} />;
      })}
    </>
  );
};

export default SpeakerList;
