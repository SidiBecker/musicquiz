import React from 'react';
import { motion } from 'framer-motion';
import Widget from '../Widget';
import db from '../../db.json';
import Link from '../Link';

function QuizzesExternos({ externalQuizzes }) {
  const links = externalQuizzes || db.external;
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        Quizzes da galera!
      </Widget.Header>
      <Widget.Content>
        {links.map((quiz) => {
          const [projectName, githubUser] = quiz
            .replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '')
            .split('.');
          return (
            <li key={quiz}>
              <Widget.Topic
                as={Link}
                href={`/quiz/${projectName}___${githubUser}`}
              >
                {`${githubUser}/${projectName}`}
              </Widget.Topic>
            </li>
          );
        })}
      </Widget.Content>
    </Widget>
  );
}

export default QuizzesExternos;
