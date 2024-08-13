import { paginationDataVar } from "../graphql/useApollo";
import { useReactiveVar } from "@apollo/client";

const PagingOffsetLimitControl = () => {
  const paginationData = useReactiveVar(paginationDataVar);

  console.log(paginationData);

  const { currentPage, totalItemCount, limit } = paginationData;

  const lastPage = Math.trunc((totalItemCount - 1) / limit);

  const onNext = () => {
    if (currentPage < lastPage) {
      paginationDataVar({ ...paginationData, currentPage: currentPage + 1 });
    }
  };

  return (
    <div className="pagination">
      <a className="page-link" href="#" aria-label="First">
        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
      </a>
      <a className="page-link" href="#" aria-label="Previous">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </a>
      &nbsp;{currentPage + 1}&nbsp;
      <a className="page-link" href="#" aria-label="Next" onClick={onNext}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </a>
      <a className="page-link" href="#" aria-label="Last">
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default PagingOffsetLimitControl;
