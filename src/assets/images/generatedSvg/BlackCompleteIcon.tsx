import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const BlackCompleteIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 0c13.246 0 24 10.754 24 24S37.246 48 24 48 0 37.246 0 24 10.754 0 24 0zm14 16.914l-18.01 19.13L10 24.314l1.522-1.298 8.542 10.032 16.48-17.504L38 16.914z"
      fill="#000"
    />
  </Svg>
);

export default BlackCompleteIcon;
