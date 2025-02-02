import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    a {
      height: 220px;
      background: ${theme.colors.dark};
      color: ${theme.colors.white};
      border-radius: 6px;
      padding: 35px 45px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      &:first-child {
        margin-top: 45px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      h1 {
        color: ${theme.colors.white};
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: ${theme.font.sizes.superLarge};
      }

      p {
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.medium};
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
      }
    }
  `}
`;
