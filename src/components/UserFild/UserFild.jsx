import { Input } from 'components/UserForm';
import { MessageError, Label } from './UserFild.styled';

export const UserFild = ({ title, type, name, placeholder = null }) => {
  return (
    <Label>
      {title} <Input type={type} name={name} placeholder={placeholder} />
      <MessageError name={name} component="p" />
    </Label>
  );
};
