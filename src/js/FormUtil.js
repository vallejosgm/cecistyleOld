import React from 'react'

// Constants for the widths
export const LaptopWidth = [{"minWidth": 1025, "maxWidth": 1280}];
export const TableWidth = [{"minWidth": 768, "maxWidth": 1024}];
export const MobileWidth = [{"minWidth": 320, "maxWidth": 767}];

export const getDevice = (width) => {
  if (width > LaptopWidth[0]['minWidth']) {
    return 1;
  } else if (width >= TableWidth[0]['minWidth'] && width <= TableWidth[0]['maxWidth']) {
    return 2;
  } else if (width <= MobileWidth[0]['maxWidth']) {
    return 3;
  }
  return 1;
};

