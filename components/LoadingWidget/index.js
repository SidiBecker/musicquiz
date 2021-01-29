import React from 'react';
import Widget from '../Widget';

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        Carregando o conteúdo...
      </Widget.Content>
    </Widget>
  );
}
