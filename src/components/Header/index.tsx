import styled from "styled-components"
import imgLogo from "./LogoSimple.png";

const SHeader = styled.header`
    padding: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const SContainer = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SContainerLogo = styled.div`
    font-size: 22px;
    font-weight: 700;
    display: flex;
    align-items: center;
    span {
        color: #68462B;
    }
`
const SImgLogo = styled.img`
    max-height: 65px;
`

const SContainerTitle = styled.div`
    h1 {
        font-size: 22px;
        font-weight: 700;
    }
`

export default function Header() {
    return (
        <SHeader>
            <SContainer>
                <SContainerLogo>
                    <SImgLogo src={imgLogo} />
                    junior<span>.</span>coding
                </SContainerLogo>

                <SContainerTitle>
                    <h1>COMPRESSOR DE IMAGENS PARA TEMAS</h1>
                </SContainerTitle>
            </SContainer>
        </SHeader>
    )
} 