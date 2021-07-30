import * as React from 'react';
import Svg, {SvgProps, Circle, G, Path} from 'react-native-svg';
import {IconProps} from '../index';

const DefaultAvatar = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={50} cy={50} r={50} fill="#12121D" fillOpacity={0.05} />
    <Circle
      cx={50}
      cy={50}
      r={49.75}
      stroke="#12121D"
      strokeOpacity={0.1}
      strokeWidth={0.5}
    />
    <G
      opacity={0.2}
      stroke="#12121D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M58 58.773v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2M50 48.773a4 4 0 100-8 4 4 0 000 8z" />
    </G>
  </Svg>
);

export default DefaultAvatar;
