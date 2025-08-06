import { useQuery, NetworkStatus } from "@apollo/client";
import { GET_SESSIONS_CONCAT } from "../graphql/queries";
import { Card, Button } from "reactstrap";

const SessionsConcat = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_SESSIONS_CONCAT,
    {
      variables: { limit: 4, afterCursor: "" },
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMoreSessions = networkStatus === NetworkStatus.fetchMore;

  if (loading && !loadingMoreSessions) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  const { datalist, pageInfo } = data.sessionsConcat;

  const { hasNextPage, lastCursor } = pageInfo;

  const showMore = () => {
    fetchMore({
      variables: { afterCursor: lastCursor },
    });
  };

  const sessions = datalist.map((session) => {
    const { id, title, room } = session;

    return (
      <Card
        key={id}
        style={{ margin: "10px", padding: "10px", border: "1px solid black" }}
      >
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ fontStyle: "italic", color: "gray", fontWeight: 700 }}>
          Location: {room.name} (Capacity: {room.capacity})
        </div>
      </Card>
    );
  });

  const loadMoreBtn = hasNextPage && (
    <Button onClick={showMore}>
      {loadingMoreSessions ? "Loading..." : "Show More"}
    </Button>
  );

  return (
    <div className="containter show-fav mt-3">
      <>
        {sessions}
        {loadMoreBtn}
      </>
    </div>
  );
};

export default SessionsConcat;
