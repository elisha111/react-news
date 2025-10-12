import Skeleton from "@/shared/ui/Skeleton";

import type { DirectionType, SkeletonType } from "@/shared/interfaces";

type WithSkeletonPropsType = {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
};

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count?: number
) {
  return function WithSkeleton(props: WithSkeletonPropsType & P) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component type={type} {...(restProps as P)} />;
  };
}

export default withSkeleton;
