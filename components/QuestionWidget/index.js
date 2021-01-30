import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';
import Button from '../Button';
import Widget from '../Widget';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selected, setSelected] = useState(undefined);
  const [isQuestonSubmited, setIsQuestionSubmited] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isCorrect = selected === question.answer;
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.2 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);

            setTimeout(() => {
              setIsQuestionSubmited(false);
              setHasValue(false);
              setSelected(undefined);
              onSubmit(isCorrect);
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            let alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            let isSelected = selected === alternativeIndex;

            if (isQuestonSubmited) {
              isSelected = isSelected || alternativeIndex === question.answer;
              alternativeStatus = alternativeIndex === question.answer ? 'SUCCESS' : 'ERROR';
            }

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestonSubmited && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  readOnly={isQuestonSubmited}
                  onChange={(ev) => {
                    if (!isQuestonSubmited) {
                      setSelected(alternativeIndex);
                      setHasValue(true);
                    } else {
                      ev.preventDefault();
                    }
                  }}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasValue || isQuestonSubmited}>
            Confirmar
          </Button>

          {isQuestonSubmited && isCorrect && <p>Você Acertou! :D</p>}
          {isQuestonSubmited && !isCorrect && <p>Você Errou! :(</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
