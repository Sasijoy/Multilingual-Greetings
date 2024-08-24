import {Component} from 'react'
import {
  MultilingualGreetingsContainer,
  Heading,
  UlListContainer,
  ListItem,
  Button,
  Image,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {status: languageGreetingsList[0].id}

  render() {
    const {status} = this.state
    const imageUrlAndAlt = languageGreetingsList.find(
      each => each.id === status,
    )
    const {imageUrl, imageAltText} = imageUrlAndAlt
    return (
      <MultilingualGreetingsContainer>
        <Heading>Multilingual Greetings</Heading>
        <UlListContainer>
          {languageGreetingsList.map(each => {
            const {id, buttonText} = each
            const onClickButton = () => {
              this.setState({status: id})
            }

            return (
              <ListItem key={id}>
                <Button colors={status === id} onClick={onClickButton}>
                  {buttonText}
                </Button>
              </ListItem>
            )
          })}
        </UlListContainer>
        <Image src={imageUrl} alt={imageAltText} />
      </MultilingualGreetingsContainer>
    )
  }
}

export default MultilingualGreetings
