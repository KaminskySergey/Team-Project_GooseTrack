import { SpinnerCircular } from 'spinners-react';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color="#FFFFFF"
        secondaryColor="#3E85F3"
      />
    </Container>
  );
};
