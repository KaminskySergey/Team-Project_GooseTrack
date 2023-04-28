import ReactSwipe from 'react-swipe';

import {
  ReviewContainer,
  Review,
  Item,
  ButtonContainer,
  ImageContainer,
  AboutContainer,
  ItemUser,
  Text,
  ReviewMain,
} from './CarouselTablet.styled';

import { ReactComponent as Back } from 'images/svg/arrowBack.svg';
import { ReactComponent as Next } from 'images/svg/arrowNext.svg';
import avatar1 from 'images/reviews/one.png';
import avatar2 from 'images/reviews/two.png';
import stars from 'images/reviews/stars.png';

export const CarouselTablet = () => {
  let reactSwipeEl;

  return (
    <ReviewContainer>
      <Item>Reviews</Item>
      <ReviewMain>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
          <Review>
            <ImageContainer>
              <img
                src={avatar1}
                alt="Callendar view"
                width="100"
                height="100"
              />
            </ImageContainer>
            <AboutContainer>
              <ItemUser>Olena Doe </ItemUser>
              <img src={stars} alt="stars" width="110" height="14" />
              <Text>
                GooseTrack is impressive, the calendar view and filter options
                make it easy to stay organized and focused. Highly recommended.
              </Text>
            </AboutContainer>
          </Review>
          <Review>
            <ImageContainer>
              <img
                src={avatar2}
                alt="Callendar view"
                width="120"
                height="120"
              />
            </ImageContainer>
            <AboutContainer>
              <ItemUser>Alexander Hubbard </ItemUser>
              <img src={stars} alt="stars" width="110" height="14" />
              <Text>
                GooseTrack is incredibly helpful, the sidebar with account
                management, calendar, and filter options make navigation
                seamless. Great for staying organized.
              </Text>
            </AboutContainer>
          </Review>
        </ReactSwipe>
      </ReviewMain>
      <ButtonContainer>
        <Back
          onClick={() => reactSwipeEl.prev()}
          style={{ width: '50px', height: '50px' }}
        />
        <Next
          onClick={() => reactSwipeEl.next()}
          style={{ width: '50px', height: '50px', marginLeft: '30px' }}
        />
      </ButtonContainer>
    </ReviewContainer>
  );
};
