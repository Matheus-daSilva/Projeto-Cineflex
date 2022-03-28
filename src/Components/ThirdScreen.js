import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
//import Footer from "./Footer";

export default function ThirdScreen() {
    const { idSessao } = useParams();
    const { items, setItems } = useState({});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse.then(response => {
            const { data } = response;
            //setItems(data);
            console.log(data);
        })
       
    }, [idSessao]);

    // return  (
    //     <>
    //     <Section>
    //         <h2>Selecione o(s) assento(s)</h2>
            
    //         {items.seats.map(item => {
    //             return (
    //                 <p key={"assento" + item.id}>{item.name}</p>
    //             );
    //         })}

    //     </Section>
    //     </>
    // );
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

const Loading = styled.div`
position: fixed;
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;
`