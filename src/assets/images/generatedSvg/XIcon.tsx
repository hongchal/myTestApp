import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const XIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 19L19 5M5 5l14 14"
      stroke="#12121D"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default XIcon;
