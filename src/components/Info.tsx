import styled from 'styled-components'


export interface InfoConfig {
    title: string;
    description: string;
}

const Info = ({ title, description }: InfoConfig) => {
  return (
    <InfoSection>
            <span>{ title }</span>
            <p>{ description }</p>
    </InfoSection>
  )
}

export default Info

const InfoSection = styled.section`
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    letter-spacing: 0;

    & span {
        color: white;
        font-weight: 500;
        font-size: 2.8em;
    }

    & p {
        color: white;
        font-size: 0.8em;
    }
`