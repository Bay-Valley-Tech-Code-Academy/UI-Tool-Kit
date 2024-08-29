import React from 'react';
import Link from 'next/link';

export default function PurchaseSuccess() {
    return (
        <div className="text-center p-4">
            <h1 className="text-2xl font-bold">Purchase Successful!</h1>
            <p className="mt-2">Thank you for your purchase. Your order has been placed successfully.</p>
            <Link href="/productlists">
                <a className="text-blue-500 mt-4 inline-block">Back to products</a>
            </Link>
        </div>
    );
}
