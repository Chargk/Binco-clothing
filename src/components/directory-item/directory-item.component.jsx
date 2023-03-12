import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const goToItemHandler = () => {
    navigate(`/shop/${title}`);
  };

  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer onClick={goToItemHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
