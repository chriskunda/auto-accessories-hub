import { useCart } from '../context/CartContext';
import './Toast.css';

const Toast = () => {
  const { toastMessage, toastOpen } = useCart();

  return (
    <div className={`app-toast ${toastOpen ? 'show' : ''}`}>
      {toastMessage}
    </div>
  );
};

export default Toast;
