import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const FireRed = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 17 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.5 22.958a7.813 7.813 0 007.812-7.812c0-.902-.24-1.768-.521-2.573-1.736 1.716-3.055 2.573-3.958 2.573C15.994 7.854 13.708 4.729 7.458.562c.52 5.209-2.913 7.578-4.31 8.893a7.813 7.813 0 005.351 13.503zm.739-18.505c3.376 2.865 3.393 5.09.784 9.66-.792 1.39.21 3.116 1.81 3.116.716 0 1.441-.208 2.207-.62a5.73 5.73 0 11-9.466-5.637c.132-.123.797-.714.826-.74.442-.396.806-.747 1.165-1.131 1.281-1.373 2.202-2.896 2.673-4.648z"
      fill="#F34161"
    />
  </Svg>
);

export default FireRed;
