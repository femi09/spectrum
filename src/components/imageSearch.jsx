import React, {Fragment} from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import {searchPhoto} from '../store/actions'

const input = ({input, meta:{touched, error}, ...rest}) => (
  <Fragment>
  <input
    type="text"
    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-light focus:outline-none"
    placeholder="Search Photo..."
    {...input}
  />
  {
    touched && error && (
      <span className="bg-orange-500">{error}</span>
    )
  }

  </Fragment>

);



const ImageForm = ({ handleSubmit, searchPhoto}) => {
  return (
    <div className="max-w-sm overflow-hidden my-10 mx-auto">
      <form onSubmit={handleSubmit(({search}) => searchPhoto(search))} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <Field
            name="search"
            component={input}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded outline-none focus:outline-none "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
const ImageSearch = reduxForm({ form: "imageSearch"})(ImageForm);
const mapDispatchToProps =(dispatch) => ({
searchPhoto: (searchTerm) => dispatch(searchPhoto(searchTerm)) 
})
export default connect(null, mapDispatchToProps)(ImageSearch);
