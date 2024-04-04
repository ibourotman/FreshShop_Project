export class Product{
    id:number;
    name:string;
    category:string;
    price:number;
    image_url:string;
    description:string;
    country_of_origin:string;
    quality:string;
    weight:string;
    constructor(id:number,name:string, tag:string, price:number ,imageUrl:string ,description:string,weight:string,country_of_origin:string,quality:string){
        this.id = id;
        this.name = name;
        this.category = tag;
        this.price = price;
        this.image_url = imageUrl;
        this.description = description
        this.country_of_origin = country_of_origin
        this.quality = quality
        this.weight = weight

    }
}