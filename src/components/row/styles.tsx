import styles from '@emotion/styled';

export const Container = styles.div`
  .label, .content{
    font-size: 13px;
  }

  .label{
    color: #9699b2;
    font-weight: 700;
    max-width: 140px;
    font-family: Roboto;
  }
  
  .content{
    margin-bottom:1rem;
  }

  .MuiGrid-item{
    overflow-wrap: break-word;
  }
`;
