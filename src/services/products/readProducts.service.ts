import { IProductResponse } from "../../interfaces/product";
import { prisma } from "../../prisma"

export const readProductsService = async ():Promise<IProductResponse[]> =>{

    const products = await prisma.products.findMany({
        select:{
            id: true,
            name: true,
            price: true,
            description: true,
            user:{
              select:{
                name: true,
                email: true
              }
            }
          }
    });

    return products;
}