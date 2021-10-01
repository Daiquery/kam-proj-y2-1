var items = [];
function createItem() {
  if (items.length >= 4) {
    console.log("List is full!");
    document.getElementById("warn").innerText =
      "List is full! Remove an item before continuing.";
    return;
  }

  document.getElementById("warn").innerText = "";

  var item = document.getElementById("listInput").value;

  for (i = 0; i < items.length; i++) {
    if (items[i] === item) {
      document.getElementById("warn").innerText =
        "You already have this item on the list..";
      return;
    }
  }

  items = [...items, item];
  var table = document.getElementById("awesome");

  index = items.findIndex((x) => x === item);

  var order = index + 1;
  var newRow = document.createElement("tr");
  var indexData = document.createElement("td");
  var itemData = document.createElement("td");

  // append 2 pieces of data to new row,
  indexData.innerHTML = `${order}`;
  itemData.innerHTML = `${item}`;

  newRow.append(indexData);
  newRow.append(itemData);

  table.append(newRow);
}

function removeItem() {
    document.getElementById("warn").innerText = "";
  const regex = new RegExp("[0-9]{1}");
  var tableItems = document.querySelectorAll("td");
  console.log(tableItems);

  var removalInput = document.getElementById("removalInput").value;
  if(removalInput > tableItems.length){
    document.getElementById("warn").innerText = "This item does not exist!";

  }
  for (i = 0; i < tableItems.length; i++) {
    console.log(tableItems[i].innerText);
    if (tableItems[i].innerText === removalInput) {
      tableItems[i].remove();
      tableItems[i + 1].remove();
    }
  }
  for (i = 0; i < tableItems.length; i++) {
    if (
      regex.test(tableItems[i].innerText) &&
      tableItems[i].innerText > removalInput
    ) {
      tableItems[i].innerText = tableItems[i].innerText - 1;
    }
  }

  removalInput = removalInput - 1;

  console.log(items[removalInput]);
  console.log(items);

  items.splice(removalInput, 1);
  console.log(items);
}

createItem();
