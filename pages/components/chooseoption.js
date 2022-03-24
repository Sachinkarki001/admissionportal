import ItemCard from "./itemcard";
function ChooseOption() {
  return (
    <div className="flex flex-wrap items-center mt-2 p-1 space-x-1 space-y-3 ml-2">
      <ItemCard className="m-0 p-0" />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default ChooseOption;
