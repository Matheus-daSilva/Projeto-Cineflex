import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from "./Footer";
import Seat from "./Seat";

export default function ThirdScreen() {
    const { idSessao } = useParams();
    const [items, setItems] = useState({});
    const green = "#8DD7CF";
    const grey = "#C3CFD9";
    const yellow = "#FBE192";
    const borderGreen = "#1AAE9E";
    const borderGrey = "#7B8B99";
    const borderYellow = "#F7C52B";

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse.then(response => {
            const { data } = response;
            setItems(data);
        })
        promisse.catch(warning);
    }, []);

    function warning() {
        alert("Ops, tente novamente");
    }

    return Object.values(items).length > 0 ? (
        <Section>
            <h2>Selecione o(s) assento(s)</h2>
            <Seats>
                {items.seats.map(item => {
                    return (
                        <Seat key={"assento" + item.id} name={item.name} isAvailable={item.isAvailable} />
                    );
                })}
                <Div>
                    <SeatState color={green} borderColor={borderGreen}>
                        <p></p>
                        <h2>Selecionado</h2>
                    </SeatState>
                    <SeatState color={grey} borderColor={borderGrey}>
                        <p></p>
                        <h2>Disponível</h2>
                    </SeatState>
                    <SeatState color={yellow} borderColor={borderYellow}>
                        <p></p>
                        <h2>Indisponível</h2>
                    </SeatState>
                </Div>
            </Seats>
            <Form>
                <Name>
                    <h2>Nome do comprador:</h2>
                    <input type="text" placeholder="Digite seu nome"></input>
                </Name>
                <CPF>
                    <h2>CPF do comprador:</h2>
                    <input type="text" maxLength="11" minLength="11" pattern="[0-9]+" placeholder="Digite seu CPF..."></input>
                </CPF>
            </Form>
            <Button>Reservar assento(s)</Button>
            <Footer posterURL={items.movie.posterURL} title={items.movie.title} name={"- " +items.name} weekday={items.day.weekday} />
        </Section>
    ) : (
        <Loading>
            <p>Carregando</p>
        </Loading>
    )
}

const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 67px;
margin-bottom: 177px;

h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
}
`

const Seats = styled.div`
display: flex;
flex-wrap: wrap;
width: 340px;
`

const SeatState = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 91px;

p {
    width: 26px;
    height: 26px;
    background: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    box-sizing: border-box;
    border-radius: 12px;
}

h2 {
    width: 91px;
    height: 28px;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4E5A65;
}
`

const Div = styled.div`
position: absolute;
display: flex;
justify-content: space-around;
width: 327px;
height: 130px;
top: 367px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 81px;
width: 100%;
`

const Name = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 327px;
height: 76px;

h2 {
    display: flex;
    justify-content: left;
    width: 327px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
}

input {
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    padding-left: 18px;
}
`

const CPF = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 327px;
height: 76px;
margin-top: 7px;

h2 {
    display: flex;
    justify-content: left;
    width: 327px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
}

input {
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    padding-left: 18px;
}
`

const Button = styled.button`
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color: #FFFFFF;
width: 225px;
height: 42px;
left: 72px;
top: 688px;
margin-top: 57px;
background: #E8833A;
border: 1px solid #E8833A;
border-radius: 3px;
`

const Loading = styled.div`
position: fixed;
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;

p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;
    color: #293845;
}
`