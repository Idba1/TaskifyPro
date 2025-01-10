import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'TaskifyPro'} >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia.
              </p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;