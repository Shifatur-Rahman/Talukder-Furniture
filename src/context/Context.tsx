import { allProducts } from "@/data/products";
import type { CartItem, Product } from "@/types/product";
import type { ReactNode } from "react";
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
  useMemo,
} from "react";

interface ContextType {
  cartProducts: CartItem[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalPrice: number;
  addProductToCart: (id: number, qty?: number) => void;
  isAddedToCartProducts: (id: number) => boolean;
  removeFromWishlist: (id: number) => void;
  addToWishlist: (id: number) => void;
  isAddedtoWishlist: (id: number) => boolean;
  quickViewItem: Product | null;
  setQuickViewItem: React.Dispatch<React.SetStateAction<Product | null>>;
  quickAddItem: number;
  setQuickAddItem: React.Dispatch<React.SetStateAction<number>>;
  addToCompareItem: (id: number) => void;
  isAddedtoCompareItem: (id: number) => boolean;
  removeFromCompareItem: (id: number) => void;
  compareItem: number[];
  setCompareItem: React.Dispatch<React.SetStateAction<number[]>>;
  updateQuantity: (id: number, qty: number) => void;
  quantityInCart: (id: number) => number;
  wishList: number[];
}

const dataContext = createContext<ContextType | undefined>(undefined);

export const useContextElement = () => {
  const context = useContext(dataContext);
  if (!context) {
    throw new Error("useContextElement must be used within a Context provider");
  }
  return context;
};

export default function Context({ children }: { children: ReactNode }) {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);
  const [wishList, setWishList] = useState<number[]>([]);
  const [compareItem, setCompareItem] = useState<number[]>([1, 2, 3]);
  const [quickViewItem, setQuickViewItem] = useState<Product | null>(null);
  const [quickAddItem, setQuickAddItem] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Sync from localStorage (run once on mount)
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cartList") || "[]");
      const storedWish = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const storedCompare = JSON.parse(
        localStorage.getItem("compareList") || "[]"
      );

      if (Array.isArray(storedCart)) setCartProducts(storedCart);
      if (Array.isArray(storedWish)) setWishList(storedWish);
      if (Array.isArray(storedCompare)) setCompareItem(storedCompare);
    } catch {
      setCartProducts([]);
      setWishList([]);
      setCompareItem([]);
    }
  }, []);

  // Debounced localStorage writes
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      localStorage.setItem("cartList", JSON.stringify(cartProducts));
      localStorage.setItem("wishlist", JSON.stringify(wishList));
      localStorage.setItem("compareList", JSON.stringify(compareItem));
    }, 300);
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [cartProducts, wishList, compareItem]);
  useEffect(() => {
    const subtotal = cartProducts.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const isAddedToCartProducts = (id: number) => {
    return cartProducts.some((product) => product.id === id);
  };

  const addProductToCart = (id: number, qty: number = 1) => {
    setCartProducts((prev) => {
      const exists = prev.some((p) => p.id === id);
      if (exists) return prev;
      const product = allProducts.find((p) => p.id === id);
      if (!product) return prev;
      const item: CartItem = { ...product, quantity: qty };
      return [...prev, item];
    });
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setCartProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const quantityInCart = (id: number) => {
    const item = cartProducts.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  const addToWishlist = (id: number) => {
    setWishList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const removeFromWishlist = (id: number) => {
    setWishList((prev) => prev.filter((i) => i !== id));
  };

  const addToCompareItem = (id: number) => {
    setCompareItem((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromCompareItem = (id: number) => {
    setCompareItem((prev) => prev.filter((i) => i !== id));
  };

  const isAddedtoWishlist = (id: number) => wishList.includes(id);
  const isAddedtoCompareItem = (id: number) => compareItem.includes(id);

  const contextElement = useMemo<ContextType>(
    () => ({
      cartProducts,
      setCartProducts,
      totalPrice,
      addProductToCart,
      isAddedToCartProducts,
      removeFromWishlist,
      addToWishlist,
      isAddedtoWishlist,
      quickViewItem,
      setQuickViewItem,
      quickAddItem,
      setQuickAddItem,
      addToCompareItem,
      isAddedtoCompareItem,
      removeFromCompareItem,
      compareItem,
      setCompareItem,
      updateQuantity,
      quantityInCart,
      wishList,
    }),
    [
      cartProducts,
      setCartProducts,
      totalPrice,
      addProductToCart,
      isAddedToCartProducts,
      removeFromWishlist,
      addToWishlist,
      isAddedtoWishlist,
      quickViewItem,
      setQuickViewItem,
      quickAddItem,
      setQuickAddItem,
      addToCompareItem,
      isAddedtoCompareItem,
      removeFromCompareItem,
      compareItem,
      setCompareItem,
      updateQuantity,
      quantityInCart,
      wishList,
    ]
  );

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
