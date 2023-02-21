import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <main>
      <Title>Seja bem-vinda(o) ao repositório de desafios front-end</Title>
      <p>
        Para quem não me conhece eu sou o Cadu, e para quem me conhece também.
        Esse é um repositório de desafios do{' '}
        <a
          target='_blank'
          href='https://piccalil.li/category/front-end-challenges-club/'
        >
          Front-End Challenges Club
        </a>
      </p>
    </main>
  );
};

export default Home;
