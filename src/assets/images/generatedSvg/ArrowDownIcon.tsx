import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '~/assets/images';

const ArrowDownIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 13 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.625.75L6.375 6 1.125.75"
      stroke="#12121D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowDownIcon;
