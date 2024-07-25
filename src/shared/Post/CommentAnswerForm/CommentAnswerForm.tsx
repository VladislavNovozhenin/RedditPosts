import React, { useRef, useEffect} from 'react';
import styles from './commentanswerform.css';
import { MenuComment } from '../CommentForm/MenuComment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../../store/reducer';
import { Formik, Form, Field, FormikValues, FormikErrors, ErrorMessage} from 'formik';

interface ICommentAnswerFormProps {
  modalForm?: React.CSSProperties,
  onClose?: () => void;
}

export function Commentanswerform({ modalForm, onClose }: ICommentAnswerFormProps) {
  const commentValue = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();
  const refForm = useRef<HTMLFormElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !refForm.current?.contains(event.target)) {
        onClose?.();
      }
    }
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <Formik
      initialValues={{ message: commentValue }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert('Форма отправлена ');
          setSubmitting(false);
          dispatch(updateComment(values.message));
        }, 400);
      }}
      validate={(values: FormikValues) => {
        const errors: FormikErrors<FormikValues> = {};
        if (!values.message) {
          errors.message = 'Заполните поле';
        } else if (values.message.length <= 3) {
          errors.message = 'Введите больше 3-х символов';
        }
        return errors;
      }}
    >
      {({ errors, touched, isSubmitting}) => (
        <Form className={styles.form} style={modalForm} ref={refForm}>
          <ErrorMessage
            component="div"
            name="message"
            className={styles.inputError}
          />

          <Field component="textarea" type='message' name='message' className={styles.input} style={errors.message && touched.message && { borderColor: 'red' }} />
          <div className={styles.content}>
            <MenuComment />
            <button type='submit' className={styles.button} disabled={isSubmitting}>Комментировать</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

