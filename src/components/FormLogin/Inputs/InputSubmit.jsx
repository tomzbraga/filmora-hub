function InputSubmit({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-lg w-full p-2 mt-3 transition-colors"
      type="submit"
    >
      {texto}
    </button>
  );
}

export default InputSubmit;