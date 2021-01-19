import styled from 'styled-components';

export const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  max-width: 700px;
`;

export const Par = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.4rem;
  line-height: 46px;
  font-weight: 400;
  letter-spacing: 0px;
  font-family: 'FontAwesome';
  font-style: italic;
`;

export const Text = styled.h5`
  text-align: center;
  font-family: 'FontAwesome';
  margin-bottom: 20px;
  display: contents;
`;

export const Dot = styled.div`
  display: flex;
  cursor: pointer;
  padding-top: 30px;
`;

export const DotSpan = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 3px;
  display: flex;
  cursor: pointer;

  &:hover:before {
    background: rgba(0, 0, 0, 0.25);
    transition: background-color 0.3s ease;
    ${(props) =>
      props['data-quote'] === props['active']
        ? `background-color: #d47e38`
        : ``}
  }
  &:before {
    cursor: pointer;
    content: '';
    height: 15px;
    width: 15px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    transition: background-color 0.3s ease;

    ${(props) =>
      props['data-quote'] === props['active']
        ? `background-color: #d47e38`
        : ``}
  }
`;
