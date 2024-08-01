import { Dispatch, SetStateAction } from "react";

type PageState = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
