import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import {IconProps} from '../index';

const QuestionMark = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 79 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#question_mark_svg__filter0_d)">
      <Path
        d="M14.658 36.049h15.87c.146-4.736 3.369-7.861 8.056-7.861 4.59 0 7.813 2.734 7.813 6.689 0 4.297-1.71 6.348-8.35 10.254-6.787 3.906-9.229 8.3-8.3 16.65l.146 1.953h15.234V61.44c0-4.59 1.855-6.788 8.545-10.645 7.178-4.15 10.547-9.13 10.547-16.358 0-11.718-9.668-19.53-24.512-19.53-15.625 0-24.902 8.349-25.049 21.142zM37.803 87.61c5.078 0 9.228-3.857 9.228-8.789 0-4.883-4.15-8.74-9.228-8.74-5.127 0-9.229 3.858-9.229 8.74 0 4.932 4.102 8.79 9.229 8.79z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default QuestionMark;
