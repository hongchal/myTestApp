import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const PauseButton = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 28 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 .668h4.667v32.667H0V.668zm23.333 0H28v32.667h-4.667V.668z"
      fill="#fff"
    />
  </Svg>
);

export default PauseButton;
