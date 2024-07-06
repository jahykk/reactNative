type Product = {
    name : string;
    price : number;
    category: string;
   }
   
   //กำหนด array ของ Product
   let Product: Product[] =[
       { name:'Laptop',price:50000,category:'Electronics'},
       { name:'Shirt',price:1200,category:'Apparel'},
       { name:'Coffer Maker',price:2500,category:'Appliances'},
   ]
   
   //สร้างฟังก์ชันชื่อ filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามราคาที่กำหนด
   function FilterProductByPrice(products:Product[],minPrice:number):Product[] {
       return products.filter(product=>product.price>minPrice);
       
   }
   
   //สร้างฟังก์ชันชื่อ discountProduct ใช้สำหรับลดราคาสินค้า 10%
   function DiscountProduct(products:Product[]):Product[]{
       return products.map(product=>({...product,price:product.price * 0.9}));
   }
   
   //เรียกใช้ฟังก์ชัน
   let FilterProduct = FilterProductByPrice(products,2000);
   let DiscountProducts = discountProduct(FilterProduct);
   
   //แสดงผลลัพธ์ที่ต้องการ
   //console.log(filterProduct);
   console.log(discountProducts);