import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const PlayForward = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 37 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.999 15.222L1.627 25.47a.833.833 0 01-1.295-.693V1.224A.833.833 0 011.627.53l15.372 10.248V1.224A.833.833 0 0118.294.53l17.665 11.777a.834.834 0 010 1.386L18.294 25.47a.833.833 0 01-1.295-.693v-9.555z"
      fill="#fff"
    />
  </Svg>
);

export default PlayForward;
