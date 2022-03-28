import styled from 'styled-components';

export default function Footer(props) {
    const { posterURL, title } = props;
    return (
        <Div>
            <Picture>
                <img src={posterURL} alt={title}></img>
            </Picture>
            <p>{title}</p>
        </Div>
    )
}

const Div = styled.div`
display: flex;
align-items: center;
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
width: 100%;
height: 117px;
background-color: #DFE6ED;

p {
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
    margin-left: 14px;
}
`

const Picture = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 64px;
height: 89px;
margin-left: 10px;
background-color: #FFFFFF;

img {
    width: 48px;
    height: 72px;
}
`