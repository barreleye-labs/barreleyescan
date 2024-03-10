import styles from '@emotion/styled';

import ICard from '@mui/joy/Card';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const CustomCard = styles.div`
.MuiCard-root{
  cursor: pointer;
  background-color: ${(props) => props.background};
  border: 1px solid #d3e7e4;
  flex-direction: row;
  justify-content: space-between;
  .MuiCardContent-root{
    display: flex;
    flex-direction: column;
    padding: 12px;
  }

   &:hover{
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    }
   ${mq[1]} {
     .MuiTypography-h5{
        font-size: 16px;
     }
     .link{
        font-size:12px;
     }  
   }
   
   
  .wrapper {
    padding: 31px 24px;
    display: flex;
    align-items: center;
    h4 {
      font-weight: 600;
      line-height: 1.57143;
      font-size: 14px;
      color: rgb(145, 158, 171);
    }
    h2 {
      color: #212b36;
      font-size: 27px;
      font-weight: 900;
      margin: 0;
      span {
        font-size: 13px;
        font-weight: 600;
        margin-left: 3px;
      }
    }

    .icon-wrapper {
      color: #34b4a9;
      background: #e5fbf8;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-right: 16px;
      border-radius: 50%;
      box-shadow:
        rgba(95, 116, 141, 0.03) 0px 2px 1px -1px,
        rgba(95, 116, 141, 0.04) 0px 1px 1px 0px,
        rgba(95, 116, 141, 0.08) 0px 1px 3px 0px;
      .MuiSvgIcon-root {
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentcolor;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: 1.5rem;
      }
    }
  }


}
`;

export const DefaultCard = styles.div`
.MuiCard-root{
  background-color: rgb(255, 255, 255);
  color: rgb(33, 43, 54);
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  padding-bottom: 0;
 }
 
  .MuiCardActions-root{
      float: right;
      margin-top:3rem;
   }
`;
export const Container = styles(ICard)`
  width: 80%;
  min-width: 80%;
  margin: 0 auto;

  
  ${mq[1]} {
      width: 100%;
      padding: 1rem;
  }
  border: none;
  border-radius: 16px;

  .MuiTypography-h5{
    font-weight: 700;
  }
  
  .warning {
    color: #c73d3d;
  }
  
  .input-wrapper{
    width: 96%;
    margin: 0 auto;
    margin-top: 2rem;
  }
  
  .button{
    font-size: 1rem;
    font-weight: 700;
    color:#34b4a9;
    background: #e5fbf8;
   
    &:disabled {
       color: #ffffff;
       background: #ececec;
    }
  }
  
  .icon-wrapper{
    position:absolute;
    top: 2rem;
    right: 2rem;
  }
  
  .MuiFormControl-root{
    width: 100%;
  }
  
  .return {
    color: #00987b;
    margin-bottom: 1rem;
    padding: 0;
    margin: 0;
    min-width: 0px;
    gap: 5px;
    svg{
      font-size:13px;
    }
  }
  
  
  .link{
    text-align: left;
  }
    
  
 }
`;
