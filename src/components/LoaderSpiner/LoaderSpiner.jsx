import { RotatingLines } from  'react-loader-spinner'
import s from './LoaderSpiner.module.css';

export default function LoaderSpiner() {
  return (
    <div className={s.Loader}>
      
      <RotatingLines
  width="150"
  strokeColor="#6495ED"
  strokeWidth="4"
  animationDuration="1"
/>
    </div>
  );
}
