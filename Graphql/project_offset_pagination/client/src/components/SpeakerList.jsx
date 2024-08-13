import { useQuery, useReactiveVar } from "@apollo/client";
import Speaker from "./Speaker.jsx";
import { GET_SPEAKERS } from "../graphql/query";
import { paginationDataVar } from "../graphql/useApollo.js";

const SpeakerList = () => {
  const paginationData = useReactiveVar(paginationDataVar);
  const { limit, currentPage } = paginationData;

  const { loading, error, data } = useQuery(GET_SPEAKERS, {
    variables: {
      offset: currentPage * limit,
      limit,
    },
    onCompleted({ speakers }) {
      paginationDataVar({
        ...paginationData,
        totalItemCount: speakers.pageInfo.totalItemCount,
      });
    },
  });

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
