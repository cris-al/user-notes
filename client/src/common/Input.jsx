import styled from 'styled-components';

const InputStyled = styled.input`
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 250px;
`;

export default function Input({type, name, handleChange, value}){

    return(
        <InputStyled 
            type={type} 
            name={name}
            value={value}
            onChange={handleChange}/>
    )
}