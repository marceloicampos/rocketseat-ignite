import styled from "styled-components";

export const ContainerTransactionsTable = styled.div`
margin-top: 4rem;

table {
  width: 100%;
  border-spacing: 0 0.5rem;
  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    // esse & a gente fala assim ' quando for o primeiro filho do td use ... '
  }
  &.deposit {
    color: var(--green);
    // esse & a gente fala assim ' quando tiver a classe deposit no td use ... '
  }
  
  &.withdraw {
    color: var(--red);
    // esse & a gente fala assim ' quando tiver a classe withdraw no td use ... '
  }
  }
}
`
