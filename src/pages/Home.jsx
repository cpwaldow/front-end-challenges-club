import styled from 'styled-components';
import cadu from '../assets/cadu-happy.jpeg';

const Title = styled.h1`
  text-align: center;
  line-height: 40px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const Perfil = styled.img`
  width: 350px;
`;

const Home = () => {
  return (
    <main>
      <Title>Seja bem-vinda(o) ao repositório de desafios front-end</Title>
      <Container>
        <Text>
          Para quem não me conhece eu sou o Cadu, e para quem me conhece também.
          Esse é um repositório de desafios do{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://piccalil.li/category/front-end-challenges-club/'
          >
            Front-End Challenges Club
          </a>
        </Text>
        <Perfil src={cadu} alt='Cadu' />
      </Container>
    </main>
  );
};

export default Home;
