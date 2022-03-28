import styled from 'styled-components';
import { useState } from "react";

export default function Seat(props) {
    const { name, isAvailable, buySeats, setBuySeats, id } = props;
    const [validation, setValidation] = useState(false);
    const grey = "#C3CFD9";
    const yellow = "#FBE192";
    const green = "#8DD7CF";
    const borderGrey = "#7B8B99";
    const borderYellow = "#F7C52B";
    const borderGreen = "#1AAE9E";

    function addSeat() {
        setBuySeats([...buySeats, id])
    }

    function removeSeat(i){
        const location = buySeats.indexOf(i);
        buySeats.splice(location, 1);
        setBuySeats([...buySeats]);
    }

    if (isAvailable) {
        if (!validation) {
            return (
                <Div color={grey} borderColor={borderGrey} onClick={() => {
                    setValidation(true)
                    addSeat();
                    }}>
                    <p>{name}</p>
                </Div>
            )
        }
        else {
            return (
                <Div color={green} borderColor={borderGreen} onClick={() => {
                    setValidation(false);
                    removeSeat(parseInt(name));
                    }}>
                    <p>{name}</p>
                </Div>
            )
        }
    }
    else {
        return (
            <Div color={yellow} borderColor={borderYellow}>
                <p>{name}</p>
            </Div>
        )
    }

}

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 26px;
height: 26px;
margin-left: 7px;
margin-bottom: 18px;
background: ${props => props.color};
border: 1px solid ${props => props.borderColor};
box-sizing: border-box;
border-radius: 12px;
`