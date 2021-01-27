import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../components/Widget';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }

  input, button {
    border-radius: 5px;
  }

  input {
    padding: 5px;
  }
  button {
    margin-left: 5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color:  ${({ theme }) => theme.colors.contrastText};
    padding: 6px 10px;
  }
`;

const LabelQuiz = styled.a`
color: white;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const validarForm = (ev) => {
    ev.preventDefault();

    if (!name || name.length < 3) {
      alert('Insira seu nome. É necessário pelo menos 3 caracteres.');
      return;
    }
    router.push(`/quiz?name=${name}`);
  };

  return (
    <>
      <Head>
        <title>MusicQuiz</title>
        <meta property="og:title" content="MusicQuiz by SidiBecker" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:url" content="https://musicquiz.sidibecker.vercel.app" />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <GitHubCorner projectUrl="https://github.com/SidiBecker" />
        <QuizContainer>
          <Widget>
            <Widget.Header>
              Quiz Musical
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={validarForm}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Insira seu nome" />
                <button type="submit" disabled={name.length < 3}>
                  Jogar
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              Quizzes da galera!
            </Widget.Header>
            <Widget.Content>
              <LabelQuiz href="#"><p>Quiz Star Wars</p></LabelQuiz>
              <LabelQuiz href="#"><p>Quiz Disney</p></LabelQuiz>
              <LabelQuiz href="#"><p>Quiz Carros</p></LabelQuiz>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
