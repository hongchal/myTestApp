import React from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '@components/ui/Paragraph';

const HomeContents = () => {
  return (
    <SafeAreaView>
      <ContentsWrapper>
        <Paragraph fontFamily={'Poppins'} fontWeight={'bold'} fontSize={20}>
          home contents
        </Paragraph>
      </ContentsWrapper>
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const ContentsWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default HomeContents;
