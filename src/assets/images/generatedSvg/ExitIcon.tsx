import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const ExitIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.711 4A.711.711 0 003 4.711v15.245c0 .392.318.71.711.71h9.284a.671.671 0 000-1.342h-8.69V5.191h8.766a.596.596 0 100-1.191h-9.36z"
      fill="#fff"
    />
    <Path
      d="M8 12h14M17 7l5 5-5 5"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ExitIcon;
