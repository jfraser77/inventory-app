// components/AddInventoryForm.tsx
import {
  Flex,
  Box,
  TextField,
  TextArea,
  Checkbox,
  Button,
  Heading,
  Grid,
} from "@radix-ui/themes";
import { CreateInventoryItem, InventoryItem } from "../types/inventory";
import { useState } from "react";

// Helper type for form state initialization
type InventoryFormState = Omit<CreateInventoryItem, "timestamp">;

export default function AddInventoryForm({
  onSubmit,
}: {
  onSubmit: (item: InventoryItem) => void;
}) {
  const [formData, setFormData] = useState<InventoryFormState>({
    name: "",
    description: "",
    computer: false,
    docking_station: false,
    phone: false,
    monitors: false,
    printer: false,
    returned: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create complete item with timestamp
    const completeItem: InventoryItem = {
      ...formData,
      id: 0, // Temporary, will be replaced by database
      timestamp: new Date().toISOString(),
    };

    onSubmit(completeItem);

    // Reset form
    setFormData({
      name: "",
      description: "",
      computer: false,
      docking_station: false,
      phone: false,
      monitors: false,
      printer: false,
      returned: false,
    });
  };

  return (
    <Box mb="5">
      <Heading mb="4" size="5">
        Add New Item
      </Heading>

      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <TextField.Root>
            <TextField.Root
              placeholder="Item name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </TextField.Root>

          <TextArea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <Heading size="3" mt="2">
            Equipment Type
          </Heading>

          <Grid columns="2" gap="3">
            {[
              { id: "computer", label: "Computer" },
              { id: "docking_station", label: "Docking Station" },
              { id: "phone", label: "Phone" },
              { id: "monitors", label: "Monitors" },
              { id: "printer", label: "Printer" },
              { id: "returned", label: "Returned" },
            ].map(({ id, label }) => (
              <Flex asChild gap="2" key={id}>
                <label>
                  <Checkbox
                    checked={
                      formData[id as keyof InventoryFormState] as boolean
                    }
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, [id]: checked })
                    }
                  />
                  <span className="text-sm ml-2">{label}</span>
                </label>
              </Flex>
            ))}
          </Grid>

          <Button type="submit" mt="3">
            Add Item
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
