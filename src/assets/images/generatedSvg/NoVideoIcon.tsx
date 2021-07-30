import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const NoVideoIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.196 3.5H2.293a1 1 0 00-1 1v14a1 1 0 001 1h.666l.982-1.7H2.793V4.96h8.56l.843-1.46zM7.28 17.8h8.553V4.96h-1.14l.843-1.46h.757a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41l-5.213-3.65v4.2a1 1 0 01-1 1H6.298l.982-1.7zM22 15.5l-4.707-3.207V10.5L22 7v8.5z"
      fill="#fff"
    />
    <Path
      d="M14.803.041l1.591.919L3.662 23.012l-1.591-.919L14.803.041z"
      fill="#F34161"
    />
  </Svg>
);

export default NoVideoIcon;
