import "./style.css";
import { useAppSelector } from '../../store/hooks';

interface IMatrixElementProps {
  content: number;
  row: number;
  col: number;
}

const MatrixElement: React.FC<IMatrixElementProps> = ({ content, row, col }) => {
  const { row: dataRow, column: dataColumn } = useAppSelector(state => state.closestNumber.data);

  console.log(row, col);

  return (
    <div 
      className={(row + 1 === dataRow && col + 1 === dataColumn) ? 'element highlighted' : 'element'}
    >
      {content}
    </div>
  )
};

export default MatrixElement;
