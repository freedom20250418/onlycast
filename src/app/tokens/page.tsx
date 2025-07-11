"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TokenCard } from "@/components/tokens/token-card";
import { CreateTokenDialog } from "@/components/tokens/create-token-dialog";
import { useTokens } from "@/hooks/token/use-tokens";

export default function TokensPage() {
  const [sortBy, setSortBy] = useState("marketcap");
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useTokens(15);
  const tokens = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Control Area */}
      <div className="flex items-center justify-between mb-6">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-36">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketcap">By Market Cap</SelectItem>
            <SelectItem value="time">By Time</SelectItem>
          </SelectContent>
        </Select>

        <CreateTokenDialog />
      </div>

      {/* Token Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {tokens.map((token) => (
          <TokenCard key={token.token_address} token={token} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        {hasNextPage ? (
          <Button
            variant="outline"
            onClick={() => fetchNextPage()}
            className="gap-2"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
            {isFetching && !isFetchingNextPage ? (
              <span className="animate-spin"></span>
            ) : null}
            <ChevronDown className="w-4 h-4" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
