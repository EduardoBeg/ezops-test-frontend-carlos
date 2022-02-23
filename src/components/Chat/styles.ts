import styled from "styled-components"

export const Container = styled.div`
    margin: auto;
    background: white;
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif;
   
    overflow-y: scroll;
    overflow-wrap: break-word;

    border-radius: 0 0 15px 15px;
    width: 60rem;
    height: 85vh;
   
    box-shadow: 1px 7px 13px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 7px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 7px 13px 0px rgba(0,0,0,0.75);

    ul { 
        li {
            margin: auto;
            list-style-type: none;
    
            h3 {
                font-size: 1.2rem;
                margin-left: 0.5rem;
            }

            p {
                margin: 0 1rem 0 2rem;
            }

            div {
                min-height: 2rem;
                width: 40%;
                border-radius: 15px;
                display: flex;
                background: var(--background);
                
                align-items: center;
                margin: 0 1rem 0 2rem;
                justify-content: space-between;

                img {
                    cursor: pointer;
                    width: 2rem;
                    margin: 1rem;
                    
                    transition: 0.3s;
                    
                    :hover{
                        opacity: 70%;
                    }
                }
            }
        }
    }

    input {
        height: 3rem;
        width: 51.5rem;
        border-radius: 40px;
        border: 1px solid black;
        font-size: 1rem;
        padding: 0.5rem;
        outline-color: var(--green);
        border-color: var(--light-dark);

        position: absolute;
        margin-left: 0.5rem;
        bottom: 6.5vh;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box; 
        box-sizing: border-box;
    }

    input[type="file"] { 
        display: none;
    }

        .send {
            border: none;
            background: var(--green);
            border-radius: 50px;
            width: 3rem;
            height: 3rem;
            
            position: fixed;
            margin-left: 56rem;
            bottom: 6.5vh; 
            position: fixed;

            transition: 0.3s;

            img {
                margin-right: 0.2rem;
                width: 2rem;
            }

            :hover {
                filter: brightness(80%)
            }
        }
        .upload {
            border: none;
            background: var(--green);
            border-radius: 50px;
            width: 3rem;
            height: 3rem;
            
            position: fixed;
            margin-left: 52.5rem;
            bottom: 6.5vh; 
            
            transition: 0.3s;

            img {
                cursor: pointer;
                width: 2rem;
            }
            
            :hover {
                filter: brightness(80%)
            }
        }
        div {
            background: white;
            position: relative;
            width: 100%;
            height: 4.5rem;
            bottom: 0;
        }
`