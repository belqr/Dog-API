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

   .box-image-random-dog {
      padding: 0 40px;
      width: 100%;
      height: 84vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #FFE04F;

      div:first-child {
         margin-top: 50px;
         padding: 30px;
         text-align: center;
         font-size: 18px;
         font-weight: 800;
         
         img {
            width: 380px;
            cursor: pointer;
         }
      }
   
      div:last-child {
         margin: 0 10px;
         width: 100%;
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
   
         >img {
            width: 120px;
            cursor: pointer;
         }

         .dog-box {
            width: 100%;
            max-width: 800px;
            height: fit-content;
            background-color: #B7867A;
            border: 7px solid #7B3937;
            border-radius: 2.5em;

            >img {
               width: 100%;
               max-height: 65vh;
               border-radius: 2em;
            }
         }
      }
   }

   @media (max-width: 425px) {
      .box-image-random-dog {
      padding: 25px 25px;
      height: 90vh;
      flex-direction: column;

      div:first-child {
         margin-top: 0;
         padding: 0;
         font-size: 14px;
         
         img {
            width: 150px;
         }
      }
      
      div:last-child {
         margin: 0 10px;
         width: 100%;
         text-align: center;
         display: flex;
         flex-direction: column;
         align-items: center;
      
            >img {
               width: 50px;
            }

            .dog-box {
               width: 100%;
               max-width: 400px;
               border: 5px solid #7B3937;

               >img {
                  width: 100%;
                  height: 38vh;
                  border-radius: 2em;
               }
            }
         }
      }
   }
`