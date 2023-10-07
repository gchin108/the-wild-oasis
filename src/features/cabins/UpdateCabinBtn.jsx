import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function UpdateCabinBtn({ cabin }) {

  return (
    <Modal>
      <Modal.Open opens="edit">
        <button>
        Update
        </button>
      </Modal.Open>
      <Modal.Window name="edit">
        <CreateCabinForm cabinToEdit={cabin} />
      </Modal.Window>
    </Modal>
  );
}
// export default function UpdateCabinBtn({ cabin }) {
//   const [isOpenModal, setIsOpenModal] = useState();

//   return (
//     <>
//       <button onClick={() => setIsOpenModal((show) => !show)}>
//         <HiPencil />
//       </button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(!isOpenModal)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal(!isOpenModal)}
//             cabinToEdit={cabin}
//           />
//         </Modal>
//       )}
//     </>
//   );
// }
