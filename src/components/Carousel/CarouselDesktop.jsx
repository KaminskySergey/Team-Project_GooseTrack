import ReactSwipe from 'react-swipe';

import {
  ReviewContainer,
  Review,
  Item,
  ButtonContainer,
  UserFeedback,
  ImageContainer,
  AboutContainer,
} from './CarouselDesktop.styled';

import { ReactComponent as Back } from 'images/svg/arrowBack.svg';
import { ReactComponent as Next } from 'images/svg/arrowNext.svg';
import avatar1 from 'images/reviews/one.png';
import avatar2 from 'images/reviews/two.png';
import stars from 'images/reviews/stars.png';

export const CarouselDesktop = () => {
  let reactSwipeEl;

  return (
    <ReviewContainer>
      <Item>Reviews</Item>

      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false, startSlide: 0 }}
        ref={el => (reactSwipeEl = el)}
      >
        <UserFeedback>
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
              <h4>Olena Doe </h4>
              <img src={stars} alt="stars" width="110" height="14" />
              <p>
                GooseTrack is impressive, the calendar view and filter options
                make it easy to stay organized and focused. Highly recommended.
              </p>
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
              <h4>Alexander Hubbard </h4>
              <img src={stars} alt="stars" width="110" height="14" />
              <p>
                GooseTrack is incredibly helpful, the sidebar with account
                management, calendar, and filter options make navigation
                seamless. Great for staying organized.
              </p>
            </AboutContainer>
          </Review>
        </UserFeedback>
        <UserFeedback>
          <Review>
            <ImageContainer>
              <img src={avatar1} alt="avatar" width="100" height="100" />
            </ImageContainer>
            <AboutContainer>
              <h4>Marina Bohach </h4>
              <img src={stars} alt="stars" width="110" height="14" />
              <p>
                GooseTrack is impressive, the calendar view and filter options
                make it easy to stay organized and focused. Highly recommended.
              </p>
            </AboutContainer>
          </Review>
          <Review>
            <ImageContainer>
              <img src={avatar2} alt="avatar" width="120" height="120" />
            </ImageContainer>
            <AboutContainer>
              <h4>Vladimir Kalinskiy </h4>
              <img src={stars} alt="stars" width="110" height="14" />
              <p>
                GooseTrack is incredibly helpful, the sidebar with account
                management, calendar, and filter options make navigation
                seamless. Great for staying organized.
              </p>
            </AboutContainer>
          </Review>
        </UserFeedback>
      </ReactSwipe>

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
