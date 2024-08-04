import styled from "styled-components";
import Center from "./Center";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import Carticon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;
const Columns = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Columns>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>

              <ButtonsWrapper>
                <ButtonLink
                  href={"/products/" + product._id}
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonLink>
                <Button white={1} onClick={addFeaturedToCart}>
                  <Carticon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Columns>
          <Columns>
            <img src={product.images[0]} alt="" />
          </Columns>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
