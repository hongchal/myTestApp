import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const HomeIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.57 8.285l9-7 9 7v11a2 2 0 01-2 2h-14a2 2 0 01-2-2v-11z"
      stroke="#12121D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
