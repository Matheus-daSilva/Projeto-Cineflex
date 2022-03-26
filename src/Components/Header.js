import styled from 'styled-components';

export default function Header() {
    return (
        <Top>
            <h1>CINEFLEX</h1>
        </Top>
    )
}

const Top = styled.div`
width: 100%;
height: 67px;
background: #C3CFD9;
position: fixed;
top: 0px;
left: 0px;
right: 0px;
display: flex;
justify-content: center;
align-items: center;

h1 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;

}
`