import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const TimeOrange = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.499.084c5.75 0 10.416 4.667 10.416 10.417S16.25 20.917 10.5 20.917.082 16.251.082 10.501 4.749.084 10.499.084zm0 18.75a8.331 8.331 0 008.333-8.333 8.331 8.331 0 00-8.333-8.334 8.331 8.331 0 00-8.334 8.334 8.331 8.331 0 008.334 8.333zm3.683-13.49l1.473 1.473-5.156 5.157L9.026 10.5l5.156-5.157z"
      fill="#FA9139"
    />
  </Svg>
);

export default TimeOrange;
