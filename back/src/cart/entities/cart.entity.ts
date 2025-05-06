import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../database/entities/user.entity';
import { CartItem } from '../../database/entities/cart-item.entity';

@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToMany(() => CartItem, cartItem => cartItem.cart)
  items: CartItem[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 