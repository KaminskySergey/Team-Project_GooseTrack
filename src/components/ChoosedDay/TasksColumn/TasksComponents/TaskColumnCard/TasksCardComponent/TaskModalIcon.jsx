import { Modal } from './TaskModalIcon.styled';

export const TaskModalIcon = ({ children, listId }) => {
  return <Modal $listId={listId}>{children}</Modal>;
};
