import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const MoreIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.89 12.945a1 1 0 100-2 1 1 0 000 2zM18.89 12.945a1 1 0 100-2 1 1 0 000 2zM4.89 12.945a1 1 0 100-2 1 1 0 000 2z"
      stroke="#12121D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MoreIcon;
