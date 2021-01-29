import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../components/Widget';
import GitHubCorner from '../components/GitHubCorner';
import QuizBackground from '../components/QuizBackground';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';

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
        <title>{db.title}</title>
        <meta property="og:title" content="MusicQuiz by SidiBecker" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:url" content="https://musicquiz.sidibecker.vercel.app" />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <GitHubCorner projectUrl="https://github.com/SidiBecker" />
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              {db.title}
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={validarForm}>
                <Input value={name} name="nomeDoUsuario" onChange={(e) => setName(e.target.value)} type="text" placeholder="Insira seu nome" />
                <Button type="submit" disabled={name.length < 3}>
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              Quizzes da galera!
            </Widget.Header>
            <Widget.Content>
              {db.external.map((quiz) => (
                <LabelQuiz href={quiz}><p>{quiz}</p></LabelQuiz>
              ))}
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
