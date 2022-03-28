import styled from 'styled-components';

export default function Seat(props) {
    const { name, isAvailable } = props;
    const grey = "#C3CFD9";
    const yellow = "#FBE192";
    const borderGrey = "#7B8B99";
    const borderYellow = "#F7C52B";

    if (isAvailable) {
        return (
            <Div color={grey} borderColor={borderGrey}>
                <p>{name}</p>
            </Div>
        )
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