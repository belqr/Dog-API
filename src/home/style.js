import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #7B3937;
   font-family: 'Fredoka One', cursive;
   color: #7B3937;

   .box-text-redirection {
      padding: 0 40px;
      width: 100%;
      height: 84vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #FFE04F;

      img {
         width: 480px;
         background-color: transparent;
      }

      div {
         width: 100%;
         max-width: 850px;
         text-align: center;
         background-color: transparent;

         p {
            font-size: 38px;
            font-weight: 800;
            background-color: transparent;
         }
      }

   }

   @media (max-width: 425px) {
      .box-text-redirection {
      padding: 50px 25px;
      height: 90vh;
      flex-direction: column;

      img {
         width: 300px;
      }

      div {
         width: 100%;

         p {
            font-size: 20px;
         }
      }

   }
   }
`