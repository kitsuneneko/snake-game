import styled from 'styled-components';

const ctype = { 
                cell: null,
                head: `orange`,
                tail: 'lightgreen', 
                food: 'red', 
                rareFood: 'violet', 
                goldenFood: 'gold' 
            }

const BoardCell = styled.section`
    height: ${({cellSize}) => cellSize?.height}px;
    width: ${({cellSize}) => cellSize?.width}px;
    background-color: ${({type}) => ctype?.[type]};
    `;

export {
    BoardCell,
};