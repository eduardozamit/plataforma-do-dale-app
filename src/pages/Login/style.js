import styled from 'styled-components';

export const MainContainer = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    position: relative;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Video-Medium", Video-MediuM;
    font-size: 18px;
    text-align: center;

    .subtitle {
        font-size: 20px;
    }
`;

export const FormData = styled.form`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 22px;
`;

export const InputBox = styled.div`
    flex: 1 1;
    width: 24rem;
    margin: 20px 0;
    border-radius: 1rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 22px;
    background-color: #F4F4F4;
    border-radius: 1rem;
`;

export const InputButton = styled.div`
    flex: 1 1;
    width: 100%;
    margin: 12px 0;
    border-radius: 6px;
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    align-items: center;
        padding: 10px;
        background-color: green;
        margin-top: 2px; // Espaçamento entre o texto e o botão
        border-radius: 15px;
        background-color: #00FF59;
        color: rgb(0, 0, 0);
        font-weight: bold;
        cursor: pointer;

        font-family: 'Montserrat', sans-serif;
`;
