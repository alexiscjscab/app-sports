
// @ts-ignore
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

 export const Alert = (message: string, type:any) => {
  type === 'success' ? alertify.success(message) : alertify.error(message);
}