import ReactSwipe from 'react-swipe';

import {
  ReviewContainer,
  ReviewMain,
  Item,
  ButtonContainer,
  Text,
  ImageContainer,
  Review,
  ItemUser,
} from './CarouselMobile.styled';

import { ReactComponent as Back } from 'images/svg/arrowBack.svg';
import { ReactComponent as Next } from 'images/svg/arrowNext.svg';
import avatarOne2x from 'images/reviews/one@2x.png';
import avatarOne from 'images/reviews/one.png';
import avatarTwo from 'images/reviews/two.png';
import avatarTwo2x from 'images/reviews/two@2x.png';
import stars from 'images/reviews/stars.png';

export const CarouselMobile = () => {
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
          <div>
            <Review>
              <ImageContainer>
                <img
                  srcSet={`${avatarOne} 1x, ${avatarOne2x} 2x`}
                  src={avatarOne}
                  alt="Callendar view"
                  width="50"
                  height="50"
                />
              </ImageContainer>
              <div>
                <ItemUser>Olena Doe </ItemUser>
                <img src={stars} alt="stars" width="110" height="14" />
              </div>
            </Review>

            <Text>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </Text>
          </div>
          <div>
            <Review>
              <ImageContainer>
                <img
                  srcSet={`${avatarTwo} 1x, ${avatarTwo2x} 2x`}
                  src={avatarTwo}
                  alt="Callendar view"
                  width="50"
                  height="50"
                />
              </ImageContainer>
              <div>
                <ItemUser>Alexander Hubbard </ItemUser>
                <img src={stars} alt="stars" width="110" height="14" />
              </div>
            </Review>
            <Text>
              GooseTrack is incredibly helpful, the sidebar with account
              management, calendar, and filter options make navigation seamless.
              Great for staying organized.
            </Text>
          </div>
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
