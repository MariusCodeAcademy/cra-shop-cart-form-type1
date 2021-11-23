import styled from 'styled-components';
const ItemCard = styled.div`
  padding: 1rem;
  width: 28%;
  border: 1px solid #000;
  box-shadow: 3px 3px 7px lightgray;
  & h2 {
    font-size: 1rem;
  }
  & img {
    height: 200px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
`;

function Item(props) {
  const { title, price, image } = props.item;
  return (
    <ItemCard>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>Price {price} eur</h3>
    </ItemCard>
  );
}

export default Item;
