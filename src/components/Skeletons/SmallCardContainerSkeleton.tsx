import React from 'react';
import ContentLoader from 'react-content-loader';
import { SEARCH_ITEMS_LIMIT } from '../../constants/nums.ts';

const SmallCardSkeleton: React.FC = () => (
  <ContentLoader
    speed={1}
    width={416}
    height={130}
    viewBox="0 0 416 130"
    backgroundColor="#DEDEDE"
    foregroundColor="#CCCCCC"
  >
    <rect x="16" y="16" rx="5" ry="5" width="80" height="80" />
    <rect x="116" y="16" rx="5" ry="5" width="200" height="20" />
    <rect x="116" y="44" rx="5" ry="5" width="150" height="20" />
    <rect x="116" y="73" rx="5" ry="5" width="100" height="20" />
  </ContentLoader>
);

const SmallCardContainerSkeleton: React.FC = () => {
  return (
    <div className={'containerSmallCards'}>
      {Array.from({ length: SEARCH_ITEMS_LIMIT }).map((_, i) => (
        <SmallCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default SmallCardContainerSkeleton;
