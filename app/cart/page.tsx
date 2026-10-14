import type { Metadata } from 'next';
import { CartPageContent } from '@/components/cart/CartPageContent';

export const metadata: Metadata = {
  title: 'Shopping Bag | HM EURO LTD',
  description: 'View your luxury fragrance shopping bag and proceed to checkout.',
};

export default function CartPage() {
  return <CartPageContent />;
}
