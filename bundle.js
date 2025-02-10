const $item = document.querySelector(".item");
const $container = document.querySelector(".container");
const $button = document.querySelector(".button");

console.log($item);
console.log($container);
console.log($button);

$button.addEventListener("click", () => {
  const $newItem = $item.cloneNode(true);
  $container.appendChild($newItem);
});
