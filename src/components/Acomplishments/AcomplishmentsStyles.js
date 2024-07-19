import styled from "styled-components";

export const Boxes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 24px 0;
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 150px;
  padding: 24px;
  margin: 12px;
  flex-basis: calc(33.333% - 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BoxNum = styled.h2`
  font-size: 36px;
  color: #fff;
  margin-bottom: 8px;
`;

export const BoxText = styled.p`
  font-size: 18px;
  color: #e4e6e7;
`;
