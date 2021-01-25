import styled from 'styled-components'
import db from '../db.json'
import Widget from '../components/Widget'
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.wrong};
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <GitHubCorner projectUrl={'https://github.com/SidiBecker'} />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            Teste
          </Widget.Header>
          <Widget.Content>
            Descricao
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            Teste
          </Widget.Header>
          <Widget.Content>
            Descricao
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </QuizBackground>
  )
}
