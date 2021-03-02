import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     scrollbar-width: thin;
    scrollbar-color: #009fff transparent;
 }
 html{
     &::-webkit-scrollbar{
         width:0.5rem;
     }
     &::-webkit-scrollbar-thumb{
        background: #009fff;
    
     }
     
 }
 body{
     font-family:"Montserrat",sans-serif;
     width:100%;
     
 }
 h2{
     font-size:3rem;
     font-family: 'Abril Fatface', cursive;
     font-weight:lighter;
 }
 h3{
     font-size:1.3rem;
     color:#333;
     padding:1.5rem 0rem;
 }p{
     font-size:1.2rem;
     line-height:200%;
     color:#696969;
 }a{
     text-decoration:none;
     color:#333;
 }
 img{
     display:block;
 }
 input{
     font-weight:bold;
     font-family:"Montserrat",sans-serif;
 }
`;

export default GlobalStyles;
