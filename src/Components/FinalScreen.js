import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FinalScreen() {
    const location = useLocation();

    return (
        <Section>
            <h2>Pedido feito com sucesso!</h2>
            <Div>
                <h3>Filme e sessão</h3>
                <p>{location.state.title}</p>
                <p>{location.state.date}{" - " + location.state.name}</p>
            </Div>
            <Div>
                <h3>Ingressos</h3>
                {location.state.buySeats.map(item => {
                    return (
                        <Tickets>
                            <p>Assento {item}</p>
                        </Tickets>
                    );
                })}
            </Div>
            <Div>
                <h3>Comprador</h3>
                <p>{"Nome: " + location.state.userName}</p>
                <p>{"CPF: " + location.state.userCPF}</p>
            </Div>
            <Link to="/">
                <Button>Voltar para a home</Button>
            </Link>
        </Section>
    );
}

const Section = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 67px;
margin-bottom: 117px;

h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 110px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
}
`

const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: left;
margin-left: 29px;
margin-top: 25px;

h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-bottom: 5px;
}

p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-top: 5px;
}
`

const Tickets = styled.div`
display: flex;
flex-direction: column;

p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    color: #293845;
    margin-top: 5px;
}
`

const Button = styled.button`
display: flex;
justify-content: center;
width: 225px;
height: 42px;
margin-top: 62px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #FFFFFF;
background: #E8833A;
border-radius: 3px;
border: 1px solid #E8833A;
`