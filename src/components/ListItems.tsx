import React from 'react'
import styled from 'styled-components';

interface ListItemConfig {
    content: contentObject[];
}

interface contentObject {
    name: string;
    link: string;
}

const ListItems = ({ content }: ListItemConfig) => {

    const items = content.map((c: contentObject) => (
        <li key={c.name}>
            <ItemLink href={c.link}>
                <ItemSpan>{c.name}</ItemSpan>
            </ItemLink>
        </li>
    ))

  return (
    <React.Fragment>{ items }</React.Fragment>
  )
}

export default ListItems

const ItemSpan = styled.span`
    color: var(--tds-nav-item--color);
    margin: 0 var(--tds-size--1x);
`

const ItemLink = styled.a`
    padding: var(--tds-size--half) var(--tds-size--1x);
    color: var(--tds-color--grey10);
    min-block-size: var(--tds-size--4x);
    border: transparent;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        background-color: var(--tds-bg-color-variant);
    }
`
