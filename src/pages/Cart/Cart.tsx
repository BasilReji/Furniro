import { setCartItems } from "../../redux/cart/cart.slice";

import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { RootState } from "../../store/store";
import cn from "./cart.module.scss";
export function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const removeFromCart = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    dispatch(setCartItems(updated));
  };

  return (
    <Layout>
      <div className={cn.cartContainer}>
        <ul>
          {cartItems.map((item) => (
            <li>
              <div>
                <span>{item.title}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
