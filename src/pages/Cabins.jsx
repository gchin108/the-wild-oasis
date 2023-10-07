import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabinBtn from "../features/cabins/AddCabinBtn";
import CabinTableOperations from "../features/cabins/CabinTableOperations";


function Cabins() {

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <CabinTableOperations/>
    </Row>

    <Row>
      <CabinTable/>

      <AddCabinBtn/>
    </Row>
    </>
  );
}

export default Cabins;
