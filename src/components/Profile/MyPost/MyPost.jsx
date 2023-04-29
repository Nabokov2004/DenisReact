import classes from './MyPost.module.css';
import Feedback from "./feedback/Feedback";
import React, {memo, useMemo} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Textarea from "./Textarea";
import TextareaError from "./TextareaError";

const AddPostForm = (props) => {
  return (

    <Formik
      initialValues={{newPostText: ''}}
      validate={values => {
        const errors = {};
        if (!values.newPostText) {
          errors.newPostText = ' Required'
        } else if (values.newPostText.length > 50) {
          errors.newPostText = 'Max length 50';
        }
        return errors;
      }}
      onSubmit={(values, {setSubmitting}) => {
        props.AddPost(values.newPostText)


        setSubmitting(false);

      }}
    >
      {({isSubmitting}) => (

        <Form>
          <Field className={classes.textNew} component={Textarea} type="textarea" name="newPostText"/>
          <ErrorMessage name="newPostText" render={msg => <TextareaError error={msg}/>}/>
          <button type="submit" disabled={isSubmitting} className={classes.AddPost}>
            Add post
          </button>
        </Form>
      )}
    </Formik>

  )
}

function MyPost(props) {
  // console.log(props) в этот момент пропсы приходят одни и те же
  let feedbackDataElement = props.feedbackData.map((feedback) => <Feedback message={feedback.message}
                                                                           id={feedback.id}/>)
  return (<div className={classes.wrapper}>
      <h3> My post</h3>
      <AddPostForm AddPost={props.AddPost}/>
      {feedbackDataElement}
    </div>
  )
}

// function arePropsEqual(oldProps, newProps) {     а здесь уже разные пропсы
//   debugger
//   console.log(oldProps)
//   console.log(newProps) здесь еще один элемент в массиве
//   return (
//
//     alert('a')
//
//   );
// }

// export default memo(MyPost, arePropsEqual);
export default MyPost;
