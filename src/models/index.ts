class RestaurantesModel {
  id: number;
  name: string;
  description: string;
  avaliation: number;
  image: string;
  infos: string[];

  constructor(
    id: number,
    name: string,
    description: string,
    avaliation: number,
    infos: string[],
    image: string
  ) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.description = description;
    this.avaliation = avaliation;
    this.infos = infos;
  }
}

class PratosModel {
  id: number;
  name: string;
  description: string;
  price: GLfloat;
  image: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: GLfloat,
    image: string
  ) {
    this.image = image;
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export { PratosModel, RestaurantesModel };
