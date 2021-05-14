import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const EmployeeDetailsFormik = () => {
    return (<Formik initialValues={{
        Id: '',
        Name: '',
        Location: '',
        Salary: '',
        EmailId: '',
        Designation: '',
        Hobbies: [],
        Gender: ''
    }} validationSchema={yup.object({
        Name: yup.string()
            .max(20, 'Name should not exceed 20 Characters')
            .required('Please Enter Employee Name'),
        Location: yup.string()
            .required('Please Enter Employee Location'),
        EmailId: yup.string()
            .email('Invalid email address')
            .required('Please Enter Email Id'),
        Designation: yup.string()
            .required('Please select the designation'),
        Hobbies: yup.array()
            .required('Please select your Hobbies'),
        Gender: yup.string()
            .required('Please select your Gender')
    })} onSubmit={values => {
        alert(JSON.stringify(values));
    }}>
        {props => (
            <div>
                <h2>Enter RT's Employee Details...</h2>
                <Form>
                    <p>
                        <label htmlFor="Id">Employee ID </label>
                        <Field name="Id" type="text"></Field>
                    </p>
                    <p>
                        <label htmlFor="Name">Employee Name </label>
                        <Field name="Name" type="text"></Field>
                        <ErrorMessage name="Name"></ErrorMessage>
                    </p>
                    <p>
                        <label htmlFor="Location">Employee Location </label>
                        <Field name="Location" type="text"></Field>
                        <ErrorMessage name="Location"></ErrorMessage>
                    </p>
                    <p>
                        <label htmlFor="Salary">Employee Salary </label>
                        <Field name="Salary" type="text"></Field>
                    </p>
                    <p>
                        <label htmlFor="EmailId">Employee Email ID </label>
                        <Field name="EmailId" type="text"></Field>
                        <ErrorMessage name="EmailId"></ErrorMessage>
                    </p>
                    <p>
                        <label>Employee Designation :
                           <Field name="Designation" as="select">
                                <option value="">---Select---</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">C</option>
                            </Field>
                            <ErrorMessage name="Designation"></ErrorMessage>
                        </label>
                    </p>
                    <p>
                        <label id="checkbox-group"> Hobbies :
                              <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="Hobbies" value="One" />
                                    Sports
                                </label>
                                <label>
                                    <Field type="checkbox" name="Hobbies" value="Two" />
                                    Swimming
                                </label>
                                <label>
                                    <Field type="checkbox" name="Hobbies" value="Three" />
                                    Chess
                                </label>
                            </div>
                            <ErrorMessage name="Hobbies"></ErrorMessage>
                        </label>
                    </p>
                    <p>
                        <div id="my-radio-group">Gender</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="Gender" value="Male" />
                                    Male
                            </label>
                            <label>
                                <Field type="radio" name="Gender" value="Female" />
                                Female
                            </label>
                        </div>
                        <ErrorMessage name="Gender"></ErrorMessage>
                    </p>
                    <button type="submit" disabled={props.isValid == false}>Submit</button>
                </Form>
            </div>
        )}
    </Formik>);
}

export default EmployeeDetailsFormik;