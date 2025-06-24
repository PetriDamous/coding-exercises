import { makeVar } from "@apollo/client";

export const themeVar = makeVar("light");

export const paginationDataVar = makeVar({
  limit: 3, // Number of speakers to show at a time
  offset: 0, // How many speakers to skip before starting to show them
  currentPage: 0, // current page on
  totalItemCount: 0, // total number of speakers over all not just ones showing
});
