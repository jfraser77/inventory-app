// components/AddInventoryForm.tsx
import { useState } from "react";
import { CreateInventoryItem } from "../types/inventory";

export default function AddInventoryForm({
  onAdd,
}: {
  onAdd: (item: CreateInventoryItem) => void;
}) {
  const [formData, setFormData] = useState<CreateInventoryItem>({
    name: "",
    computer: false,
    docking_station: false,
    phone: false,
    monitors: false,
    printer: false,
    returned: false,
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      computer: false,
      docking_station: false,
      phone: false,
      monitors: false,
      printer: false,
      returned: false,
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Add New Inventory Item</h2>

      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          "computer",
          "docking_station",
          "phone",
          "monitors",
          "printer",
          "returned",
        ].map((field) => (
          <label key={field} className="flex items-center">
            <input
              type="checkbox"
              checked={formData[field as keyof CreateInventoryItem] as boolean}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field]: e.target.checked,
                })
              }
              className="mr-2"
            />
            {field.replace("_", " ")}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}
