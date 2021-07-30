import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const ChallengeIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 20 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.631 6.215l-.29.317.27.335 5.344 6.633H1v9H.5V.5h18.364l-5.233 5.715zM1.5 1H1v12h17.069l-.685-.82-4.716-5.649 4.424-4.688.795-.843H1.5z"
      fill="#000"
      stroke="#000"
    />
  </Svg>
);

export default ChallengeIcon;
