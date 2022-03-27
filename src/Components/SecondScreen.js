import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function SecondScreen() {
    const { idFilme } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promisse.then(response => {
            const { data } = response;
            setItems(data);
        })
        promisse.catch(warning);
    }, [idFilme]);

    function warning() {
        alert("Ops, tente novamente");
    }

    return Object.values(items).length > 0 ? (
        <Section>
            <h2>Selecione o horário</h2>
            {items.days.map(item => {
                return (
                    <Schedule>
                        <p>{item.weekday} - {item.date}</p>
                        <Time>
                            {item.showtimes.map(item => {
                                return (
                                    <p>{item.name}</p>
                                );
                            })}
                        </Time>
                    </Schedule>
                );
            })}
        </Section>
    ) : (
        <Loading>
            <p>Ops... Carregando</p>
        </Loading>
    )
}


const Section = styled.div`
display: flex;
flex-direction: column;
align-items: left;
margin-top: 67px;
margin-left: 24px;

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

const Schedule = styled.div`
display: flex;
flex-direction: column;

p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
}
`

const Time = styled.div`
display: flex;

p{
   display: flex;
   justify-content: center;
   align-items: center;
   width: 83px;
   height: 43px;
   left: 23px;
   top: 227px;
   background: #E8833A;
   border-radius: 3px;
   margin-right: 8px;
   margin-top: 22px;
   margin-bottom: 23px;
}
`

const Loading = styled.div`
position: fixed;
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;
`