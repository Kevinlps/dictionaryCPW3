import DictionaryModel from '../models/DictionaryModel'
//import { Card, CryptoLogo, CryptoTitle, InfoLink, Price } from './styles'

type Props = {
    wordCard: DictionaryModel
}

//const priceIncreasedStyle = {
//  color: '#26c281',
//}
//
//const priceDecreasedStyle = {
//  color: '#ff4c30',
//}

const WordCard = ({ wordCard }: Props) => {
  const Word =
    wordCard.word
  const Meaning =
    wordCard.meanings
  }

  return (
    <InfoLink to='/info'>
      <Card>
        
    </InfoLink>
  )


export default WordCard