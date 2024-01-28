import styles from '@emotion/styled';

export const Container = styles.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem !important;
  background-color: rgb(255, 255, 255) !important;
  .MuiButton-variantSoft{
    background: transparent;
  }
  .MuiInput-root{
    width: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
  }
  .MuiSvgIcon-fontSizeMedium{
    width: 18px;
    height: 18px;
    stroke-width: 1.6;
    color:#0072E7
  }
`;
