"use client"

import { Card, CardContent } from '@/components/ui/card'

const walletData = {
  address: "0x1234567890abcdef1234567890abcdef12345678",
  balances: [
    { label: "ETH Balance", value: "2.45 ETH" },
    { label: "INTU Tokens", value: "1,234 INTU" },
    { label: "NFTs Owned", value: "8 NFTs" }
  ]
}

export function WalletInfo() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          💼 Wallet Information
        </h2>
        <div className="bg-muted/50 rounded-lg p-4 mb-4">
          <div className="font-mono text-sm break-all">{walletData.address}</div>
        </div>
        <div className="space-y-3">
          {walletData.balances.map((balance, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              <span className="text-muted-foreground">{balance.label}</span>
              <span className="font-semibold">{balance.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
