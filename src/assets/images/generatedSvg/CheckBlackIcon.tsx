import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const CheckBlackIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zM8.958 13.765l-3.75-3.6L6.372 8.97l2.565 2.447 5.087-5.181 1.184 1.174-6.25 6.355z"
      fill="#000"
    />
  </Svg>
);

export default CheckBlackIcon;
