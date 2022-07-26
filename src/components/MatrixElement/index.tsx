import "./style.css";

interface props {
  content: number;
}

const MatrixElement: React.FC<props> = ({ content }) => {
  return <div className="element">{content}</div>;
};

export default MatrixElement;
