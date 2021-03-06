import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

export default function MainScreen() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promisse.then(response => {
            const { data } = response;
            setItems(data);
        });
        promisse.catch(warning);
    }, []);

    function warning() {
        alert('Ocorreu um erro ao carregar os filmes. Por favor, tente novamente')
    }

    return (
        <Main>
            <h2>Selecione um filme</h2>
            <Poster>
                {items.map(item => {
                    return (
                        <Link to={`/sessoes/${item.id}`} key={"poster" + item.id}>
                            <Picture>
                                <img src={item.posterURL} alt={item.title}></img>
                            </Picture>
                        </Link>
                    );
                })}
            </Poster>
        </Main >
    );

}

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-top: 67px;

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

const Picture = styled.div`
width: 145px;
height: 209px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 11px;
transition: transform 300ms, background-color 300ms;
animation: pulse;

Picture:houver {
    transform: scale(1.05);
    background-color: #7FFFFF;
}

Picture:active {
    transform: scale(0.95);
    animation: none;
}

@keyframes pusle {
    from{
        box-shadow: #69bcff 0 0 0;
    }
    to {
        box-shadow: #69fff380 00 27px;
    }
}
`

const Poster = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 320px;

img {
    width: 129px;
    height: 193px;
}
`
