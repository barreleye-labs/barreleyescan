import styles from '@emotion/styled';
import { teal } from '@mui/material/colors';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
const primary = teal[500];
const second = teal[400];

export const Container = styles.div`
    display:flex;
    align-items: center;
   
   ${mq[1]} {
    .MuiFormControl-root{
      width: 100% !important;
      }
    }

    .button{
      font-size: 1rem;
      font-weight: 700;
      background: ${second};
     &:hover{
        background: ${primary}
      }
    }
    
   .MuiFormControl-root{
      margin-left: 0;
   }
   
   .Mui-error:has(.Mui-disabled) {
      input:disabled {
        color:  #D32F2F !important;
      }
    
      .MuiOutlinedInput-notchedOutline {
        input:disabled {
          color:  #D32F2F !important;
        }
        border-color: #D32F2F !important;
      }
   }  
    
  .copy-button{
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px currentcolor;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.71429;
    text-transform: unset;
    font-family: "Public Sans", sans-serif;
    min-width: 64px;
    padding: 4px 8px;
    border-radius: 8px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    color: rgb(255, 255, 255);
    background-color: rgb(33, 43, 54);
    height: 30px;
    font-size: 13px;

    &:hover{
      color: ${primary};
      background: ${teal[50]}
    }
  }

  .active{
    color: ${primary};
    background: ${teal[50]}
  }
  
  .input-wrapper{
    display: flex;
    align-items:center;
    gap:12px;

    .MuiFormControl-root{
      width: 50%;
    }
  } 
  .error{
   color: #D32F2F;
  }
  
  .info{
   color: #00987b;
  }
 }
`;
