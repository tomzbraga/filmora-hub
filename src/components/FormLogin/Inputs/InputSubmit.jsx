import FormLogin from "../FormLogin";

function InputSubmit({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 rounded-lg w-full p-2 mt-3"
      type="button"
    >
      {texto}
    </button>
  );
}

export default InputSubmit;
