export interface ProductInterface {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface ProductBodyInterface {
  name: string;
  amount: string;
}