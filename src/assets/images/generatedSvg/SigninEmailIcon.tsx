import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
import {IconProps} from '../index';

const SigninEmailIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={40} height={40} rx={20} fill="#C4C4C4" />
    <Path fill="#C4C4C4" d="M11.333 14h17.333v13.333H11.333z" />
    <Path
      d="M10 12.5v15h20v-15H10zm17.932 1.667L20 20.594l-7.932-6.427h15.864zM11.667 25.833v-9.847L20 22.739l8.333-6.753v9.847H11.667z"
      fill="#fff"
    />
  </Svg>
);

export default SigninEmailIcon;
