import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cart } from '../../database/entities/cart.entity';
import { Product } from '../../database/entities/product.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cart, cart => cart.items)
  @JoinColumn()
  cart: Cart;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
} 