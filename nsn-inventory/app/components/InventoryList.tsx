// components/InventoryList.tsx
import { useEffect, useState } from "react";
import { InventoryItem } from "../types/inventory";

export default function InventoryList() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("/api/inventory");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch inventory:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) return <div>Loading inventory...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Computer</th>
            <th className="py-2 px-4 border">Docking Station</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Monitors</th>
            <th className="py-2 px-4 border">Printer</th>
            <th className="py-2 px-4 border">Returned</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border text-center">
                {item.computer ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border text-center">
                {item.docking_station ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border text-center">
                {item.phone ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border text-center">
                {item.monitors ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border text-center">
                {item.printer ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border text-center">
                {item.returned ? "✓" : ""}
              </td>
              <td className="py-2 px-4 border">{item.description}</td>
              <td className="py-2 px-4 border">
                {new Date(item.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
