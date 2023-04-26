import ReactSwipe from 'react-swipe';

import {
  ReviewContainer,
  Review,
  Item,
  ButtonContainer,
  UserFeedback,
} from './CarouselDesktop.styled';

import { ReactComponent as Back } from 'images/svg/arrowBack.svg';
import { ReactComponent as Next } from 'images/svg/arrowNext.svg';

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
            <h4>Olena Doe </h4>
            <p>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </p>
          </Review>
          <Review>
            <h4>Alexander Hubbard </h4>
            <p>
              GooseTrack is incredibly helpful, the sidebar with account
              management, calendar, and filter options make navigation seamless.
              Great for staying organized.
            </p>
          </Review>
        </UserFeedback>
        <UserFeedback>
          <Review>
            <h4>Marina Bohach </h4>
            <p>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </p>
          </Review>
          <Review>
            <h4>Vladimir Kalinskiy </h4>
            <p>
              GooseTrack is incredibly helpful, the sidebar with account
              management, calendar, and filter options make navigation seamless.
              Great for staying organized.
            </p>
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
