import { fetchCartItems, setCartItems } from "../../redux/cart/cart.slice";

import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { AppDispatch, RootState } from "../../store/store";
import cn from "./cart.module.scss";
import { useCallback, useEffect } from "react";
export function Cart() {
  const { cartItems, loading, error } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch: AppDispatch = useDispatch();
  const removeFromCart = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id);
    dispatch(setCartItems(updated));
  };

  const getCart = useCallback(async () => {
    try {
      await dispatch(fetchCartItems());
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, [dispatch]); // Include dispatch in the dependency array

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <Layout>
      <div className={cn.cartContainer}>
        {loading ? (
          "Loading..."
        ) : error ? (
          "That's an error Man!!!"
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li>
                <div>
                  <span>{item.title}</span>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
