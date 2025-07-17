
export interface items {
    id: number;
    name: string;
    price: number;
}

export interface orderItem extends items {
    quantity: number;
}

