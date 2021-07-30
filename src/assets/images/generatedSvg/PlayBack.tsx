import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const PlayBack = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 37 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.999 10.778L35.371.53a.833.833 0 011.295.694v23.553a.833.833 0 01-1.295.693L19.999 15.222v9.555a.834.834 0 01-1.295.693L1.039 13.694a.834.834 0 010-1.387L18.704.53a.833.833 0 011.295.694v9.554z"
      fill="#fff"
    />
  </Svg>
);

export default PlayBack;
