'use client';

import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { Invoice } from '@/app/lib/definitions';

export default function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: Invoice[];
}) {
  if (!latestInvoices || latestInvoices.length === 0) {
    return (
      <div className="col-span-4 rounded-xl bg-white p-4 shadow">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Latest Invoices
        </h2>
        <p className="text-gray-400">No invoices found.</p>
      </div>
    );
  }

  return (
    <div className="col-span-4 rounded-xl bg-white p-4 shadow">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <ul className="divide-y divide-gray-200">
        {latestInvoices.map((invoice) => (
          <li
            key={invoice.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              {invoice.image_url ? (
                <Image
                  src={invoice.image_url}
                  alt={invoice.customer}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  ?
                </div>
              )}

              <div>
                <p className="font-medium">{invoice.customer}</p>
                <p className="text-sm text-gray-500">{invoice.email}</p>
              </div>
            </div>

            <p className="font-semibold text-gray-800">{invoice.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
