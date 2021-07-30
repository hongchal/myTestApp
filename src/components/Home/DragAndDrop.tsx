import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Color} from '@assets/color';
import styled from 'styled-components/native';
import {Paragraph} from '@components/ui/Paragraph';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

interface Props {
  BottomSheetRef: any;
}

const Data = {
  TodayLive: [
    {
      time: '17:00',
      trainer: '에너지우',
      duration: 50,
      level: '중급',
      benefit: '하체',
    },
    {
      time: '17:00',
      trainer: '에너지우',
      duration: 50,
      level: '중급',
      benefit: '하체',
    },
    {
      time: '17:00',
      trainer: '에너지우',
      duration: 50,
      level: '중급',
      benefit: '하체',
    },
    {
      time: '17:00',
      trainer: '에너지우',
      duration: 50,
      level: '중급',
      benefit: '하체',
    },
  ],
};

function isCloseToTop({
  contentOffset,
}: {
  contentOffset: {x: number; y: number};
}) {
  console.log(contentOffset.y);
  return contentOffset.y >= 150;
}

export const handleOnScroll = (props: {
  e: NativeSyntheticEvent<NativeScrollEvent>;
  setIsScrollViewTopReached?: any;
  item: any;
  index: number;
  setReservedData: any;
  BottomSheetRef: any;
}) => {
  const {
    e,
    setIsScrollViewTopReached,
    item,
    index,
    setReservedData,
    BottomSheetRef,
  } = props;
  if (setIsScrollViewTopReached !== undefined) {
    if (isCloseToTop(e.nativeEvent)) {
      console.log('ddddd');
      setIsScrollViewTopReached(true);
      setReservedData(item);
      setTimeout(() => {
        BottomSheetRef.current.close();
      }, 1000);
    } else {
      setIsScrollViewTopReached(false);
    }
  }
};

const DragAndDrop: React.FC<Props> = props => {
  const {BottomSheetRef} = props;
  const [reservedData, setReservedData] = useState<any>();
  const [isScrollViewTopReached, setIsScrollViewTopReached] = useState<boolean>(
    false,
  );
  return (
    console.log(isScrollViewTopReached),
    (
      <Wrapper>
        <PromiseParagraphZone>
          {isScrollViewTopReached ? (
            <Paragraph
              fontFamily={'Apple SD Gothic Neo'}
              fontWeight={'bold'}
              fontSize={32}
              style={{color: 'rgba(255, 255, 255, 0.4)'}}>
              오늘{' '}
              <Paragraph
                fontFamily={'Apple SD Gothic Neo'}
                fontWeight={'bold'}
                fontSize={32}
                style={{color: Color.white}}>
                {reservedData.time}
              </Paragraph>
              에
            </Paragraph>
          ) : (
            <Paragraph
              fontFamily={'Apple SD Gothic Neo'}
              fontWeight={'bold'}
              fontSize={32}
              style={{color: 'rgba(255, 255, 255, 0.4)'}}>
              오늘{' '}
              <Paragraph
                fontFamily={'Apple SD Gothic Neo'}
                fontWeight={'bold'}
                fontSize={32}
                style={{color: Color.white}}>
                00:00
              </Paragraph>
              에
            </Paragraph>
          )}
          <Paragraph
            fontFamily={'Apple SD Gothic Neo'}
            fontWeight={'bold'}
            fontSize={32}
            style={{color: 'rgba(255, 255, 255, 0.4)'}}>
            운동을 하겠습니다
          </Paragraph>
        </PromiseParagraphZone>

        {isScrollViewTopReached ? (
          (console.log(reservedData),
          (
            <ReceivedZoneContentWrapper>
              <Paragraph>{reservedData.time}</Paragraph>
              <Paragraph>{reservedData.trainer}</Paragraph>
              <Paragraph>{reservedData.duration}</Paragraph>
              <Paragraph>{reservedData.level}</Paragraph>
              <Paragraph>{reservedData.benefit}</Paragraph>
            </ReceivedZoneContentWrapper>
          ))
        ) : (
          <ReceivingZoneContentWrapper>
            <React.Fragment>
              <Paragraph
                fontFamily={'Poppins'}
                fontSize={13}
                fontWeight={'bold'}
                style={{color: Color.white, opacity: 0.7}}>
                {' '}
                카드를 위로 드래그하여 다짐을 해보세요{' '}
              </Paragraph>
            </React.Fragment>
          </ReceivingZoneContentWrapper>
        )}

        <ItemWrapper>
          <Carousel
            data={Data.TodayLive}
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  scrollEventThrottle={200}
                  decelerationRate="fast"
                  bounces={false}
                  scrollEnabled={!isScrollViewTopReached}
                  onScroll={e => {
                    handleOnScroll({
                      e,
                      setIsScrollViewTopReached,
                      item,
                      index,
                      setReservedData,
                      BottomSheetRef,
                    });
                  }}
                  style={{
                    height: 300,
                    marginTop: 60,
                    overflow: 'visible',
                  }}>
                  <CardWrapper>
                    <Paragraph>{item.time}</Paragraph>
                    <Paragraph>{item.trainer}</Paragraph>
                    <Paragraph>{item.duration}</Paragraph>
                    <Paragraph>{item.level}</Paragraph>
                    <Paragraph>{item.benefit}</Paragraph>
                  </CardWrapper>
                </ScrollView>
              );
            }}
            itemWidth={180}
            sliderWidth={Dimensions.get('window').width}
            layout={'default'}
            activeSlideAlignment={'center'}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            scrollEnabled={!isScrollViewTopReached}
            contentContainerCustomStyle={{
              overflow: 'hidden',
            }}
          />
        </ItemWrapper>
      </Wrapper>
    )
  );
};

const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${Color.fbred_50};
`;

const PromiseParagraphZone = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: 2px;
`;
const CardWrapper = styled.View`
  background-color: white;
  height: 200px;
  width: 160px;
  border-radius: 12px;
  margin-top: 100px;
  margin-bottom: 158px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width: 2px;
`;
const ReceivingZoneContentWrapper = styled.View`
  margin-top: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 132px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.16);
`;

const ReceivedZoneContentWrapper = styled.View`
  margin-top: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 132px;
  border-radius: 12px;
  background-color: ${Color.white};
`;

export default DragAndDrop;
