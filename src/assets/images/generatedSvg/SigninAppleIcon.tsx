import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
import {IconProps} from '../index';

const SigninAppleIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={20} cy={20} r={20} fill="#000" />
    <Path
      d="M28.333 22.672c-.655 1.9-2.615 5.265-4.635 5.301-1.34.026-1.771-.794-3.303-.794-1.53 0-2.01.77-3.277.82-2.143.082-5.451-4.857-5.451-9.163 0-3.956 2.756-5.917 5.165-5.953 1.291-.023 2.511.871 3.299.871.79 0 2.272-1.075 3.83-.917.652.027 2.482.262 3.657 1.98-3.117 2.035-2.631 6.291.715 7.855zM23.982 8c-2.355.095-4.277 2.566-4.009 4.61 2.177.168 4.265-2.272 4.009-4.61z"
      fill="#fff"
    />
  </Svg>
);

export default SigninAppleIcon;
