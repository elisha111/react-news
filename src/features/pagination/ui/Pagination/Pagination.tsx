import type { IPaginationProps } from "../../model/types";
import PaginationButton from "../PaginationButton";

type PaginationWrapperPropsType = {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
};

const Pagination = (props: PaginationWrapperPropsType & IPaginationProps) => {
  const { top, bottom, children, ...paginationProps } = props;

  return (
    <>
      {top && <PaginationButton {...paginationProps} />}
      {children}
      {bottom && <PaginationButton {...paginationProps} />}
    </>
  );
};

export default Pagination;
