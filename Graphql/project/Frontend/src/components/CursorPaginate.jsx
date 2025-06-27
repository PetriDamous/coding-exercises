import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_SPEAKERS_CONCAT } from "../graphql/queries";

const CursorPaginate = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_SPEAKERS_CONCAT,
    {
      variables: { limit: 4, afterCursor: "" },
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMoreSpeakers = networkStatus === NetworkStatus.fetchMore;

  if (loading && !loadingMoreSpeakers) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const { datalist, pageInfo } = data.speakersConcat;

  const { hasNextPage, lastCursor } = pageInfo;

  const showMore = () => {
    fetchMore({
      variables: { afterCursor: lastCursor },
    });
  };

  return (
    <div className="containter show-fav mt-3">
      {datalist.map(({ id, fullName }) => {
        return (
          <div key={id} className="col-sm-12">
            {fullName}
          </div>
        );
      })}

      {hasNextPage && (
        <button className="btn btn-primary mt-2" onClick={showMore}>
          {loadingMoreSpeakers ? "Loading..." : "Show More"}
        </button>
      )}
    </div>
  );
};

export default CursorPaginate;
