// import '../src/StyledApp.css'

import styled from "styled-components";

export function StyledApp() {

  const Title = styled.h1`
    font-size: 64px;
    color: #8257e6;

    p {
      font-size: 16px;
      color: #000000;
    }
  `
  return (
    <div>
      <Title>
        Hello World !!!
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      </Title>
    </div>
  );

  // return (
  //   <div>
  //     <h1 className="title">
  //       Hello World !!!
  //     </h1>
  //     <p className="paragraph">Edit <code>src/App.tsx</code> and save to reload.</p>
  //   </div>
  // );
}
