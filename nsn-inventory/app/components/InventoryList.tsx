// components/InventoryList.tsx
import { Table, Box, Heading, Flex, Badge, Text } from "@radix-ui/themes";
import { InventoryItem } from "../types/inventory";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function InventoryList({ items }: { items: InventoryItem[] }) {
  return (
    <Box>
      <Heading mb="4" size="5">
        Inventory Items
      </Heading>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Equipment</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Updated</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>
                <Text weight="bold">{item.name}</Text>
                {item.description && (
                  <Text as="p" size="2" color="gray">
                    {item.description}
                  </Text>
                )}
              </Table.RowHeaderCell>

              <Table.Cell>
                <Flex gap="2" wrap="wrap">
                  {item.computer && <Badge color="blue">Computer</Badge>}
                  {item.docking_station && <Badge color="green">Dock</Badge>}
                  {item.phone && <Badge color="amber">Phone</Badge>}
                  {item.monitors && <Badge color="purple">Monitors</Badge>}
                  {item.printer && <Badge color="crimson">Printer</Badge>}
                </Flex>
              </Table.Cell>

              <Table.Cell>
                {item.returned ? (
                  <Badge color="green">
                    <CheckIcon /> Returned
                  </Badge>
                ) : (
                  <Badge color="red">
                    <Cross2Icon /> Checked Out
                  </Badge>
                )}
              </Table.Cell>

              <Table.Cell>
                <Text as="p">
                  {new Date(item.timestamp).toLocaleDateString()}
                </Text>
                <Text as="p" size="1" color="gray">
                  {new Date(item.timestamp).toLocaleTimeString()}
                </Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
