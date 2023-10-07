import React from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function DeleteCabinBtn({ disabled, callBack }) {
  return (
    <Modal>
      <Modal.Open opens="delete">
        <button>
          Delete
        </button>
      </Modal.Open>
      <Modal.Window name="delete">
        <ConfirmDelete
          resourceName="cabins"
          disabled={disabled}
          onConfirm={callBack}
        />
      </Modal.Window>
    </Modal>
  );
}
