import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Paragraph} from '@components/ui/Paragraph';
import {Color} from '@assets/color';
import {isAppInitializedState} from '~/recoil/userInitState';
import {useSetRecoilState} from 'recoil';

const Splash: React.FC = () => {
  const setIsInit = useSetRecoilState(isAppInitializedState);

  useEffect(() => {
    const setInit = () => {
      setTimeout(() => {
        setIsInit(true);
      }, 500);
    };

    setInit();
  }, []);

  return (
    <React.Fragment>
      <SplashView>
        <WelcomeTextWrapper>
          <Paragraph
            color={Color.slategray_100}
            fontSize={28}
            fontFamily={'Poppins'}
            fontWeight={'bold'}>
            Splash
          </Paragraph>
        </WelcomeTextWrapper>
      </SplashView>
    </React.Fragment>
  );
};

const SplashView = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeTextWrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Splash;
