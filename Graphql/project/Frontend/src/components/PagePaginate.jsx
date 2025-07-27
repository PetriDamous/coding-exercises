import { useEffect } from "react";
import {
  useApolloClient,
  useQuery,
  useMutation,
  useReactiveVar,
} from "@apollo/client";
import { SpeakerList, Toolbar } from "./index";
import {
  ADD_SPEAKER,
  GET_SPEAKERS,
  themeVar,
  paginationDataVar,
} from "../graphql";

function PagePaginate() {
  const theme = useReactiveVar(themeVar);
  const paginationData = useReactiveVar(paginationDataVar);

  const { limit, currentPage, offset } = paginationData;

  const { data, error, loading } = useQuery(GET_SPEAKERS, {
    variables: {
      offset: currentPage * limit,
      limit,
    },
  });

  useEffect(() => {
    if (data && data?.speakers) {
      const newTotal = data.speakers.pageInfo.totalItemCount;

      if (paginationData.totalItemCount !== newTotal) {
        paginationDataVar({
          ...paginationData,
          totalItemCount: data.speakers.pageInfo.totalItemCount,
        });
      }
    }
  }, [data, paginationData]);

  const [addSpeaker] = useMutation(ADD_SPEAKER);

  const { cache } = useApolloClient();

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Error: {error.message}</div>;

  const totalItemCount = paginationData.totalItemCount;

  const insertSpeakerEvent = (first, last, favorite) => {
    addSpeaker({
      variables: {
        speakerInput: { first, last, favorite },
      },
      update(cache, { data: { addSpeaker } }) {
        const { speakers } = cache.readQuery({
          query: GET_SPEAKERS,
          variables: {
            offset: offset,
            limit: limit,
          },
        });

        cache.writeQuery({
          query: GET_SPEAKERS,
          variables: {
            offset: offset,
            limit: limit,
          },
          data: {
            speakers: {
              __typename: "SpeakerResults",
              datalist: [addSpeaker, ...speakers.datalist],
              pageInfo: {
                __typename: "PageInfo",
                totalItemCount,
              },
            },
          },
        });
      },
    });
  };

  const sortByIdDescending = () => {
    const { speakers } = cache.readQuery({
      query: GET_SPEAKERS,
      variables: {
        offset: offset,
        limit: limit,
      },
    });

    const speakersDescening = [...speakers.datalist].sort(
      (a, b) => b.id - a.id
    );

    cache.writeQuery({
      query: GET_SPEAKERS,
      variables: {
        offset: offset,
        limit: limit,
      },
      data: {
        speakers: {
          __typename: "SpeakerResults",
          datalist: speakersDescening,
          pageInfo: {
            __typename: "PageInfo",
            totalItemCount,
          },
        },
      },
    });
  };

  const toolBarProps = {
    totalItemCount,
    insertSpeakerEvent,
    sortByIdDescending,
  };

  const currentTheme = theme === "dark" ? "fav-list dark" : "fav-list";

  return (
    <>
      <Toolbar {...toolBarProps} />
      <div className="container show-fav">
        <div className="row">
          <div className={currentTheme}>
            <SpeakerList data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PagePaginate;
