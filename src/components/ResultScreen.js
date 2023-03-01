export const ResultScreen = ({ firstNumber, secondNumber, sign, result }) => {
  return (
    <div className="text-center bg-gray-200 h-24 ">
      <div className="float-right p-6">
        <h4 className="text-black-600 text-l">
          {firstNumber}
          {sign}
          {secondNumber}
        </h4>
        <h4 className="text-black-600 text-xl font-bold  -mb-24">{result}</h4>
      </div>
    </div>
  );
};
