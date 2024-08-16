import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_SPEAKERS_CONCAT } from "../../../../project_offset_pagination/client/src/graphql/query";

const SpeakersLoadMore = () => {
  const speakersQueryConfig = {
    variables: {
      afterCursor: "",
      limit: 4,
    },
  };

  const { data, error, fetchMore, loading, networkStatus } = useQuery(
    GET_SPEAKERS_CONCAT,
    speakersQueryConfig
  );

  const loadingMoreSpeakers = networkStatus === NetworkStatus.fetchMore;

  if (loading && !loadingMoreSpeakers) {
    return <div className="col-sm-6">Loading...</div>;
  }

  if (error) {
    return <div className="col-sm-6">Error</div>;
  }

  const { dataSet } = data.speakersConcat;
  const { hasNextPage, lastCursor } = data.speakersConcat.pageInfo;

  return (
    <div className="container show-fav mt-3">
      {dataSet.map(({ id, first, last }) => {
        return (
          <div key={id} className="col-sm-12">
            {first} {last} ({id})
          </div>
        );
      })}

      {hasNextPage && (
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            fetchMore({
              variables: {
                afterCursor: lastCursor,
              },
            });
          }}
        >
          {loadingMoreSpeakers ? "Loading..." : "Show More"}
        </button>
      )}
    </div>
  );
};

export default SpeakersLoadMore;
