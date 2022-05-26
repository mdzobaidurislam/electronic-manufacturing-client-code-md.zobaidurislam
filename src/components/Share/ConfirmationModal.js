import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const ConfirmationModal = ({ DeleteData, setDeleteData }) => {
  // console.log(DeleteData);

  return (
    <>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Are you sure you want to delete this item?
          </h3>
          <button className="btn btn-secondary w-full max-w-xs">Delete</button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
