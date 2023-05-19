// import './StyledApp.css'
// importação padrão de css
// yarn add styled-components
// yarn add @types/styled-components -D
// instalando o styled-components

import styled from "styled-components";

export function StyledApp() {

  const Title = styled.div`
  // componente estilizado
    h1 {
      font-size: 64px;
      color: #8257e6;
      margin: 0 1rem;
    }

    p {
      font-size: 16px;
      color: #000000;
      margin: 0 1rem;
    }
  `
  return (
    <Title>
      <h1>Hello World !!!</h1>
      <p>Edit <code>src/App.tsx</code> and save to reload.</p>
    </Title>
  );

  // return (
  //   <div>
  //     <h1 className="title">Hello World !!!</h1>
  //     <p className="paragraph">Edit <code>src/App.tsx</code> and save to reload.</p>
  //   </div>
  // );
}
