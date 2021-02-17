import { CartItem } from './cart.model';

export interface Invoice {
    shippingDetails?: any;
    product?: CartItem;
    totalAmount?: any;
}
