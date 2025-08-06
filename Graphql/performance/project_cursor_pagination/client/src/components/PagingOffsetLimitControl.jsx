import { paginationDataVar } from "../graphql/useApollo";
import { useReactiveVar } from "@apollo/client";

const PagingOffsetLimitControl = () => {
  const paginationData = useReactiveVar(paginationDataVar);

  const { currentPage, totalItemCount, limit } = paginationData;

  const lastPage = Math.trunc((totalItemCount - 1) / limit);

  const onFirst = () => {
    paginationDataVar({ ...paginationData, currentPage: 0 });
  };

  const onNext = () => {
    if (currentPage < lastPage) {
      paginationDataVar({ ...paginationData, currentPage: currentPage + 1 });
    }
  };

  const onPrevious = () => {
    if (currentPage > 0) {
      paginationDataVar({ ...paginationData, currentPage: currentPage - 1 });
    }
  };

  const onLast = () => {
    paginationDataVar({ ...paginationData, currentPage: lastPage });
  };

  return (
    <div className="pagination">
      <a className="page-link" href="#" aria-label="First" onClick={onFirst}>
        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
      </a>
      <a
        className="page-link"
        href="#"
        aria-label="Previous"
        onClick={onPrevious}
      >
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </a>
      &nbsp;{currentPage + 1}&nbsp;
      <a className="page-link" href="#" aria-label="Next" onClick={onNext}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </a>
      <a className="page-link" href="#" aria-label="Last" onClick={onLast}>
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default PagingOffsetLimitControl;
