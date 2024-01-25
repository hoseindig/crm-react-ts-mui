import CardBox from "./card";
import { generateProductsJSON, Product } from "../utils/fakedata";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Products = () => {
  // Provide an initial type for the state
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const generatedProducts = generateProductsJSON();
    setProducts(generatedProducts);
  }, []);

  return (
    <>
      Products
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid xs={3} key={product.id} sx={{ padding: 2 }}>
              <CardBox
                title={product.title}
                info={product.info}
                date={product.date}
              ></CardBox>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* // <h4>{product ? product.title : ""}</h4> */}
    </>
  );
};

export default Products;
