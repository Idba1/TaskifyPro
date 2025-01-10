import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onsubmit = (data) => {
    // console.log(data);
    dispatch(addTasks(data));
    onCancel();
  }

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'TaskifyPro'} >
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register('title')}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-md"
              type="text"
              id="description"
              {...register('description')}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Deadline
            </label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register('date')}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              id="assignedTo"
              {...register('assignedTo')}
            >
              <option value="Shakil Ahmed">Shakil Ahmed</option>
              <option value="Nusrat Jahan">Nusrat Jahan</option>
              <option value="Sajid Islam">Sajid Islam</option>
              <option value="Rupa Sultana">Rupa Sultana</option>
              <option value="Tahsin Khan">Tahsin Khan</option>
              <option value="Madhuri Rani">Madhuri Rani</option>
              <option value="Farhan Akhtar">Farhan Akhtar</option>
              <option value="Madhusree Roy">Madhusree Roy</option>
              <option value="Aminul Haque">Aminul Haque</option>
              <option value="Sumaiya Begum">Sumaiya Begum</option>
              <option value="Rakibul Islam">Rakibul Islam</option>
              <option value="Tanjina Akter">Tanjina Akter</option>
              <option value="Sharif Reza">Sharif Reza</option>

            </select>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="title" className="mb-2">
              Priority
            </label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register('priority')}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => onCancel()}
              type="button"
              className="btn btn-danger "
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary ">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;