import type { IPaginationProps } from "@/interfaces";

import Pagination from "@/components/Pagination";

type PaginationWrapperPropsType = {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
};

const PaginationWrapper = (
  props: PaginationWrapperPropsType & IPaginationProps
) => {
  const { top, bottom, children, ...paginationProps } = props;

  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
