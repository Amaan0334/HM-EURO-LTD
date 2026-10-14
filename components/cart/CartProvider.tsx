'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';
import type { CartItem, CartState, CartAction, CartContextType } from '@/types/cart';
import type { Product } from '@/types/product';

const STORAGE_KEY = 'hm_euro_cart_v1';

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const quantityToAdd = action.quantity && action.quantity > 0 ? action.quantity : 1;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingItemIndex > -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: quantityToAdd }],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.product.id !== action.productId),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.product.id !== action.productId),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
      };
    }

    case 'TOGGLE_CART': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    case 'OPEN_CART': {
      return {
        ...state,
        isOpen: true,
      };
    }

    case 'CLOSE_CART': {
      return {
        ...state,
        isOpen: false,
      };
    }

    case 'HYDRATE': {
      return {
        ...state,
        items: action.items,
      };
    }

    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | null>(null);

export interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const isHydratedRef = useRef(false);

  // Hydrate cart from localStorage on mount (SSR safety)
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as CartItem[];
          if (Array.isArray(parsed)) {
            dispatch({ type: 'HYDRATE', items: parsed });
          }
        }
      }
    } catch (error) {
      console.warn('[CartProvider] Failed to restore cart from localStorage:', error);
    } finally {
      isHydratedRef.current = true;
    }
  }, []);

  // Persist items to localStorage whenever they change after hydration
  useEffect(() => {
    if (!isHydratedRef.current) return;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
      }
    } catch (error) {
      console.warn('[CartProvider] Failed to save cart to localStorage:', error);
    }
  }, [state.items]);

  const itemCount = useMemo(
    () => state.items.reduce((total, item) => total + item.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (total, item) => total + item.product.priceGBP * item.quantity,
        0
      ),
    [state.items]
  );

  const value = useMemo<CartContextType>(() => {
    return {
      state,
      addItem: (product: Product, quantity?: number) =>
        dispatch({ type: 'ADD_ITEM', product, quantity }),
      removeItem: (productId: string) =>
        dispatch({ type: 'REMOVE_ITEM', productId }),
      updateQuantity: (productId: string, quantity: number) =>
        dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
      toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      itemCount,
      subtotal,
    };
  }, [state, itemCount, subtotal]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
