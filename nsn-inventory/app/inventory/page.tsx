import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const InventoryPage = () => {
  return (
    <div>
      <Button>
        <Link href="/inventory/new">New Inventory</Link>
      </Button>
    </div>
  );
};
export default InventoryPage;
