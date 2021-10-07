import styled from "@emotion/styled"

export const Progresses = styled.div`
    margin-top: 23px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SvgWrapper = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
`

export const Text = styled.div<{selected: boolean}>`
    margin-top: 5px;
    font-size: 13px;
    color: ${({ selected }) => selected ? '#FF0000' : '#333333'};
`