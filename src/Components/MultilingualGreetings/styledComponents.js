import styled from 'styled-components'

export const MultilingualGreetingsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #1e293b;
  text-align: center;
`
export const UlListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 350px;
  align-items: center;
`
export const ListItem = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  outline: none;
  border: solid 1px #db1c48;
  cursor: pointer;
  font-family: 'Roboto';
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 20px;
  color: ${props => (props.colors ? '#ffffff' : '#db1c48')};
  background-color: ${props => (props.colors ? '#db1c48' : '#ffffff')};
`
export const Image = styled.img`
  width: 290px;
`
