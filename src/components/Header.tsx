import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        color: hsl(29, 17%, 48%);
        font-size: 30px;
        font-weight: 700;
        display: flex;
        align-items: center;
    }

    .reset {
        padding: 0.4em 0.9em;
        background-color: hsl(29, 17%, 48%);
        color: hsl(0, 0%, 100%);
        font-size: 20px;
        font-weight: 400;
        border-radius: 5%;
        border: none;
    }
`;

const Header: React.FC = () => {
    return (
        <Wrapper>
            <div>
                Play 2048
            </div>
            <button className='reset'>
                Reset
            </button>
        </Wrapper>
    )
}

export default Header;