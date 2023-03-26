import ProductCard from "../product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

import Spinner from "../spinner/spinner.component";

const CategoryPreview = ({ title, products }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoryPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </div>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
