import "./style.css";
import MatrixElement from "../../components/MatrixElement";
import { nanoid } from "nanoid";

interface IMatrixProps {
  matrix: number[][];
}

const Matrix: React.FC<IMatrixProps> = ({ matrix }) => {
  return (
    <div className="wrapper">
      <div className="matrix-container">
        {matrix.map((el, rowIdx) => (
          <div className="row" key={nanoid()}>
            {el.map((matrixEl, colIdx) => (
              <MatrixElement content={matrixEl} row={rowIdx} col={colIdx} key={nanoid()} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
