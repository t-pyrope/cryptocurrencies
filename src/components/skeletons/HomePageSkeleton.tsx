import React from 'react';
import { Skeleton } from '@mui/material';

function HomePageSkeleton() {
  return (
    <div className="column">
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={50} />
    </div>
  );
}

export default HomePageSkeleton;
