import React from 'react';
import styled from 'styled-components/native';

interface TextProps {
  fontType:
    | 'Display1_kr'
    | 'Display2_kr'
    | 'Display3_kr'
    | 'Display4_kr'
    | 'Heading1_kr'
    | 'Heading2_kr'
    | 'Heading3_kr'
    | 'Heading4_kr'
    | 'Heading6_kr'
    | 'Paragraph1_kr'
    | 'Caption1_kr'
    | 'Caption2_kr'
    | 'Caption3_kr'
    | 'Caption4_kr'
    | 'Caption5_kr'
    | 'Button1_kr'
    | 'Button2_kr'
    | 'Button3_kr'
    | 'Display1_en'
    | 'Display3_en'
    | 'Heading1_en'
    | 'Heading2_en'
    | 'Heading3_en'
    | 'Caption1_en'
    | 'Caption2_en'
    | 'Caption3_en'
    | 'Caption4_en'
    | 'Caption5_en'
    | 'Caption6_en'
    | 'ButtonUnderline1_kr';
  color?: string;
}
const Typo: React.FC<TextProps> = ({children, ...props}) => {
  const {fontType, color} = props;

  const B = 'Bold';
  const R = 'Regular';
  const M = 'Medium';
  const SB = 'SemiBold';
  const L = 'Light';
  const BK = 'Black';

  switch (fontType) {
    case 'Display1_kr':
      return (
        <Korean color={color} weight={B} size={40} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Display2_kr':
      return (
        <Korean color={color} weight={B} size={32} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Display3_kr':
      return (
        <Korean color={color} weight={B} size={28} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Display4_kr':
      return (
        <Korean color={color} weight={SB} size={22} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Heading1_kr':
      return (
        <Korean color={color} weight={B} size={20} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Heading2_kr':
      return (
        <Korean color={color} weight={B} size={16} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Heading3_kr':
      return (
        <Korean color={color} weight={B} size={14} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Heading4_kr':
      return (
        <Korean color={color} weight={M} size={16} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Heading6_kr':
      return (
        <Korean color={color} weight={SB} size={14} height={19} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Paragraph1_kr':
      return (
        <Korean color={color} weight={L} size={14} spacing={-0.5}>
          {children}
        </Korean>
      );
    case 'Caption1_kr':
      return (
        <Korean color={color} weight={R} size={14} spacing={-0.2}>
          {children}
        </Korean>
      );
    case 'Caption2_kr':
      return (
        <Korean color={color} weight={R} size={12} spacing={-0.2}>
          {children}
        </Korean>
      );
    case 'Caption3_kr':
      return (
        <Korean color={color} weight={B} size={12} spacing={-0.2}>
          {children}
        </Korean>
      );
    case 'Caption4_kr':
      return (
        <Korean color={color} weight={R} size={11} height={16} spacing={-0.2}>
          {children}
        </Korean>
      );
    case 'Caption5_kr':
      return (
        <Korean color={color} weight={R} size={11} spacing={-0.2}>
          {children}
        </Korean>
      );
    case 'Button1_kr':
      return (
        <Korean color={color} weight={SB} size={13} spacing={-0.1}>
          {children}
        </Korean>
      );
    case 'Button2_kr':
      return (
        <Korean color={color} weight={SB} size={15} spacing={-0.1}>
          {children}
        </Korean>
      );
    case 'Button3_kr':
      return (
        <Korean color={color} weight={B} size={16} spacing={-0.1}>
          {children}
        </Korean>
      );
    case 'Display1_en':
      return (
        <English color={color} weight={BK} size={40} height={45} spacing={-0.5}>
          {children}
        </English>
      );
    case 'Display3_en':
      return (
        <English color={color} weight={SB} size={40} height={45} spacing={-0.5}>
          {children}
        </English>
      );
    case 'Heading1_en':
      return (
        <English color={color} weight={M} size={32} height={32} spacing={-1}>
          {children}
        </English>
      );
    case 'Heading2_en':
      return (
        <English color={color} weight={R} size={24} height={26} spacing={-0.2}>
          {children}
        </English>
      );
    case 'Heading3_en':
      return (
        <English color={color} weight={R} size={20} height={24} spacing={0.3}>
          {children}
        </English>
      );
    case 'Caption1_en':
      return (
        <English color={color} weight={SB} size={18} height={20} spacing={-0.2}>
          {children}
        </English>
      );
    case 'Caption2_en':
      return (
        <English color={color} weight={SB} size={16} height={20} spacing={-0.3}>
          {children}
        </English>
      );
    case 'Caption3_en':
      return (
        <English color={color} weight={M} size={14} height={18} spacing={-0.2}>
          {children}
        </English>
      );
    case 'Caption4_en':
      return (
        <English color={color} weight={M} size={12} height={16} spacing={-0.2}>
          {children}
        </English>
      );
    case 'Caption5_en':
      return (
        <English color={color} weight={M} size={11} height={14} spacing={-0.2}>
          {children}
        </English>
      );
    case 'Caption6_en':
      return (
        <English color={color} weight={SB} size={13} height={18} spacing={0}>
          {children}
        </English>
      );
    case 'ButtonUnderline1_kr':
      return (
        <Korean
          spacing={-0.2}
          weight={SB}
          size={16}
          height={19.2}
          color={color}
          style={{textDecorationLine: 'underline'}}>
          {children}
        </Korean>
      );
    default:
      return (
        <Korean color={color} weight={B} size={40} height={115} spacing={-1.2}>
          {children}
        </Korean>
      );
  }
};

const Korean = styled.Text<{
  weight: string;
  size: number;
  height?: number;
  spacing: number;
  color?: string;
}>`
  font-family: ${(props) => `AppleSDGothicNeo-${props.weight}`};
  font-size: ${(props) => props.size}px;
  ${(props) => props.height && `line-height: ${props.height}px`}
  letter-spacing: ${(props) => props.spacing}px;
  ${(props) => props.color && `color: ${props.color}`};
`;

const English = styled.Text<{
  weight: string;
  size: number;
  height?: number;
  spacing: number;
  color?: string;
}>`
  font-family: ${(props) => `Poppins-${props.weight}`};
  font-size: ${(props) => props.size}px;
  ${(props) => props.height && `line-height: ${props.height}px`}
  letter-spacing: ${(props) => props.spacing}px;
  ${(props) => props.color && `color: ${props.color}`};
`;

export default Typo;
