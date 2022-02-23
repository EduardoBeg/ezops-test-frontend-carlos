import styled from "styled-components";

export const Container = styled.header`
    section {
        display: flex;
        background: var(--green);
        height: 10vh;
        align-items: center;
        justify-content: space-between;
        
        div {
            display: flex;
            gap: 0.3rem;
            margin: 2rem;
            font-family: 'Poppins', sans-serif;

            img {
                width: 2.5rem;
            }

            button {
                background: transparent;
                border: none;
                
                img{
                    width: 1.5rem;
                }
            }
            input { 
                text-align: right;
                font-weight: 400;
                font-size: 1.5rem;
                outline: none;
                border: none;
                background: var(--green);
                margin: 1rem 0.5rem ;
            }
        }
    }
`
