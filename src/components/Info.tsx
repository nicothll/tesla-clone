import styled from 'styled-components'
import { device } from '../settings/device';
import { ReactComponentElement } from 'react';


export interface InfoConfig {
    title: string | ReactComponentElement<any>;
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
    display: flex;
    flex-flow: column nowrap;
    grid-template-rows: 1fr;
    justify-content: center;
    letter-spacing: 0;
    text-shadow: 0 0 1px #000000, 0 0 2px #000000;

    & span {
        color: white;
        font-weight: 500;
        font-size: 2.8em;

        & svg {
          fill: white;
      }
    }

    & p {
        color: white;
        font-size: 0.8em;
    }


    @media ${device.tablet} {
      & span {
        font-size: 2em;
    }

    & p {
        font-size: 0.6em;
    }
  }
`