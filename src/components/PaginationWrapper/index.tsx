import { ReactNode } from "react";
import { Pagination } from "../Pagination";
import { IPaginationProps } from "../../interfaces";

interface Props {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export { PaginationWrapper };
