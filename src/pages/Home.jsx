import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cadu from '../assets/cadu-happy.jpeg';

const Title = styled.h1`
  text-align: center;
  line-height: 40px;
  margin: 50px 0;
  color: ${({ color }) => (color ? color : '#000')};
`;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  width: 60%;
`;

const Container = styled.section`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Perfil = styled.img`
  width: 350px;
`;

const Anchor = styled(Link)`
  text-decoration: underline;
  color: ${({ color }) => (color ? color : '#000')};
  margin-bottom: ${({ mb }) => (mb ? mb : '')};
`;

const ContainerLinks = styled.section`
  background-color: var(--azul-medio);
`;

const LinksContent = styled.nav`
  display: flex;
  flex-direction: column;
  widt: 80%;
  margin-left: 40px;
`;

const Home = () => {
  return (
    <main>
      <Title>Seja bem-vinda(o) ao repositório de desafios front-end</Title>
      <Container>
        <Text>
          Para quem não me conhece eu sou o Cadu, e para quem me conhece também.
          Esse é um repositório de desafios do{' '}
          <Anchor
            target='_blank'
            rel='noreferrer'
            to='https://piccalil.li/category/front-end-challenges-club/'
          >
            Front-End Challenges Club
          </Anchor>
        </Text>
        <Perfil src={cadu} alt='Cadu' />
      </Container>
      <ContainerLinks>
        <Title color='#fff'>Desafios Front-end</Title>
        <LinksContent>
          <Anchor to='/emailsignup' color='#fff' mb='20px'>
            Challenge: Email sign-up form
          </Anchor>
        </LinksContent>
      </ContainerLinks>
    </main>
  );
};

export default Home;
