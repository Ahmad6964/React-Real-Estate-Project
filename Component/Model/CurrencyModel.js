import React from 'react'
import { Dropdown, Modal, Button } from "react-bootstrap";
import "./CurrencyModel.scss"
const CurrencyModel = ({open,close}) => {
    if (!open) return null;

  return (
    <div>
    <div className='overlay'>
      <div className="model">
        <Modal.Dialog>
      <Modal.Header closeButton onClick={close}>
        <Modal.Title className='text-bold'>Change Currency</Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <select name="" id="" className='form-control'>
        <option value="Pakistan (PKR)">Pakistan (PKR)</option>
        <option value="Pakistan (PKR)">Pakistan (PKR)</option>
        <option value="Pakistan (PKR)">Pakistan (PKR)</option>
       </select>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
    </div>
    </div>
  )
}

export default CurrencyModel
