export interface InventoryItem {
  id: number;
  name: string;
  description?: string;
  timestamp: Date;
  computer: boolean;
  docking_station: boolean;
  monitors: boolean;
  printer: boolean;
  phone: boolean;
  returned: boolean;
}

export type CreateInventoryItem = Omit<InventoryItem, "id" | "timestamp">;
