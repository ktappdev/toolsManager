import React, { useState, ChangeEvent } from "react";

const LendToolComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>(""); // State to store the selected item

  // Function to handle item selection
  const handleItemSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedItemId = event.target.value;
    setSelectedItem(selectedItemId);
  };

  // Function to handle marking the item as lent
  const handleMarkAsLent = () => {
    // Perform the necessary logic to mark the item as lent using the selectedItem value
    // Update the item's status or add a timestamp in your app's database or storage
    console.log(`Item with ID ${selectedItem} marked as lent`);
  };

  return (
    <div>
      <h2>Lend Item</h2>
      <select value={selectedItem} onChange={handleItemSelect}>
        <option value="">Select an item</option>
        <option value="item1">Item 1</option>
        <option value="item2">Item 2</option>
        <option value="item3">Item 3</option>
      </select>
      <button onClick={handleMarkAsLent} disabled={!selectedItem}>
        Mark as Lent
      </button>
    </div>
  );
};

export default LendToolComponent;
