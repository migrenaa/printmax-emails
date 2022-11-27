import fs from "fs";

export const generateEmailContent = (
  companyName,
  companyContact,
  productLink1,
  productName1,
  productLink2,
  productName2,
  productImage
) => {
  const buf = fs.readFileSync("./html.html");
  const html = buf.toString();

  return html
    .replace("$COMPANY", companyName)
    .replace("$CONTACT", companyContact)
    .replace("$PRODUCT_LINK1", productLink1)
    .replace("$PRODUCT_LINK1", productLink1)
    .replace("$PRODUCT_LINK2", productLink2)
    .replace("$PRODUCT_NAME1", productName1)
    .replace("$PRODUCT_NAME2", productName2)
    .replace("$IMAGE", productImage);
};
