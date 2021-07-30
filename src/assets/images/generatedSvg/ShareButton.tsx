import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const ShareButton = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 17h18v2H0v-2zM10 3.828V14H8V3.828L1.929 9.9.515 8.486 9 0l8.485 8.485-1.414 1.414L10 3.83v-.002z"
      fill="#000"
    />
    <Path fill="#000" d="M0 13h2v6H0zM16 13h2v6h-2z" />
  </Svg>
);

export default ShareButton;
