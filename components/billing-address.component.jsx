'use client';
//libraries
import { useState } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import { CgArrowLongRight } from 'react-icons/cg';

import { schemaForBillingInfo } from '@/schema';

const BillingAddressInputComponent = () => {
  const [netTerms, setNetTerms] = useState('');
  const [commissionType, setCommissionType] = useState('');
  const handleNetTerms = (selectedNetTerms) => {
    console.log(selectedNetTerms);
    setNetTerms(selectedNetTerms);
  };
  const handleCommissionType = (selectedCommissionType) => {
    console.log(selectedCommissionType);
    setCommissionType(selectedCommissionType);
  };

  const netTermsOptions = [
    { value: '30 Days', label: '30 Days' },
    { value: '60 Days', label: '60 Days' },
    { value: '90 Days', label: '90 Days' },
  ];
  const commissionTypeOptions = [
    { value: 'straight commission', label: 'Straight commission' },
    { value: 'salary plus Commission', label: 'Salary plus Commission' },
    { value: 'graduated commission', label: 'Graduated commission' },
  ];

  // select element custom styles
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 38,
      minHeight: 38,
      borderRadius: 10,
    }),
  };
  // select element custom theme
  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: 'lightgray',
      primary: 'gray',
    },
  });

  //formik hook

  const formik = useFormik({
    initialValues: {
      netTerms: '',
      commissionType: '',
      billAddress1StreetName: '',
      billAddress1County: '',
      billAddress1State: '',
      billAddress1ZipCode: '',
      billAddress1Country: '',
      billAddress2StreetName: '',
      billAddress2County: '',
      billAddress2State: '',
      billAddress2ZipCode: '',
      billAddress2Country: '',
    },
    validationSchema: schemaForBillingInfo,
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;
  return (
    <form
      className='px-8 py-4'
      onSubmit={handleSubmit}
    >
      <section>
        <h2 className='pb-2 mb-6 text-2xl font-semibold '>
          Placement-Full Time
        </h2>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <div
              className={`${
                touched.netTerms && errors.netTerms && 'btn-error'
              } join join-vertical btn w-full max-w-xl`}
            >
              <span className=' join-item'>Net Terms</span>
              <Select
                id='netTerms'
                name='netTerms'
                value={netTerms}
                onChange={(selectedOption) => {
                  handleNetTerms(selectedOption);
                  console.log('values', values.netTerms);
                  // handleChange();
                }}
                // onChange={handleChange}
                onBlur={handleBlur}
                className='join-item'
                options={netTermsOptions}
                placeholder={'Net terms'}
                loadingMessage={() => 'Fetching Net Terms'}
                noOptionsMessage={() => 'Searching Net-Terms not here '}
                isSearchable={true}
                styles={customStyles}
                theme={theme}
              />
            </div>
            <small className='flex justify-center mt-1 text-orange-600'>
              {touched.netTerms && errors.netTerms ? errors.netTerms : null}
            </small>
          </div>
          <div className='flex flex-col'>
            <div
              className={`${
                touched.netTerms && errors.netTerms && 'btn-error'
              } join join-vertical btn w-full max-w-xl`}
            >
              <span className='join-item'>Commission Type</span>
              <Select
                id='commissionType'
                value={commissionType}
                name='commissionType'
                onChange={(selectedOption) => {
                  handleCommissionType(selectedOption);
                  console.log('values', values.commissionType);
                  // handleChange();
                }}
                // onChange={handleChange}
                onBlur={handleBlur}
                options={commissionTypeOptions}
                placeholder={'commission type'}
                loadingMessage={() => 'Fetching Net Terms'}
                noOptionsMessage={() => 'Searching commission-Type not here'}
                isSearchable={true}
                styles={customStyles}
                theme={theme}
              />
            </div>
            <small className='flex justify-center mt-1 text-orange-600'>
              {touched.commissionType && errors.commissionType
                ? errors.commissionType
                : null}
            </small>
          </div>
        </div>
      </section>
      <hr className='my-8 ' />
      <section className='flex flex-col gap-6'>
        <h2 className='text-2xl font-semibold'>Invoice Address</h2>
        <div className='flex flex-col gap-5 mt-2'>
          <h3 className='text-lg underline text-semibold'>Billing Address1</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress1StreetName'
                  className={`${
                    touched.billAddress1StreetName &&
                    errors.billAddress1StreetName &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Street Name</span>
                </label>
                <input
                  id='billAddress1StreetName'
                  type='text'
                  name='billAddress1StreetName'
                  className={`${
                    touched.billAddress1StreetName &&
                    errors.billAddress1StreetName &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                  placeholder='Type here'
                  value={values.billAddress1StreetName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress1StreetName && errors.billAddress1StreetName
                  ? errors.billAddress1StreetName
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress1County'
                  className={`${
                    touched.billAddress1County &&
                    errors.billAddress1County &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>County</span>
                </label>
                <input
                  id='billAddress1County'
                  type='text'
                  name='billAddress1County'
                  className={`${
                    touched.billAddress1County &&
                    errors.billAddress1County &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                  placeholder='Type here'
                  value={values.billAddress1County}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress1County && errors.billAddress1County
                  ? errors.billAddress1County
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress1State'
                  className={`${
                    touched.billAddress1State &&
                    errors.billAddress1State &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>State</span>
                </label>
                <input
                  id='billAddress1State'
                  type='text'
                  name='billAddress1State'
                  className={`${
                    touched.billAddress1State &&
                    errors.billAddress1State &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                  placeholder='Type here'
                  value={values.billAddress1State}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress1State && errors.billAddress1State
                  ? errors.billAddress1State
                  : null}
              </small>
            </div>

            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress1ZipCode'
                  className={`${
                    touched.billAddress1ZipCode &&
                    errors.billAddress1ZipCode &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Zip Code</span>
                </label>
                <input
                  id='billAddress1ZipCode'
                  type='text'
                  name='billAddress1ZipCode'
                  className={`${
                    touched.billAddress1ZipCode &&
                    errors.billAddress1ZipCode &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                  placeholder='Type here'
                  value={values.billAddress1ZipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress1ZipCode && errors.billAddress1ZipCode
                  ? errors.billAddress1ZipCode
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress1Country'
                  className={`${
                    touched.billAddress1Country &&
                    errors.billAddress1Country &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Country</span>
                </label>
                <input
                  id='billAddress1Country'
                  type='text'
                  name='billAddress1Country'
                  className={`${
                    touched.billAddress1Country &&
                    errors.billAddress1Country &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                  placeholder='Type here'
                  value={values.billAddress1Country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress1Country && errors.billAddress1Country
                  ? errors.billAddress1Country
                  : null}
              </small>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5 mt-2'>
          <h3 className='text-lg underline text-semibold'>Billing Address2</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress2StreetName'
                  className={`${
                    touched.billAddress2StreetName &&
                    errors.billAddress2StreetName &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Street Name</span>
                </label>
                <input
                  id='billAddress2StreetName'
                  type='text'
                  name='billAddress2StreetName'
                  placeholder='Type here'
                  value={values.billAddress2StreetName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    touched.billAddress2StreetName &&
                    errors.billAddress2StreetName &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress2StreetName && errors.billAddress2StreetName
                  ? errors.billAddress2StreetName
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress2County'
                  className={`${
                    touched.billAddress2County &&
                    errors.billAddress2County &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>County</span>
                </label>
                <input
                  id='billAddress2County'
                  type='text'
                  name='billAddress2County'
                  placeholder='Type here'
                  value={values.billAddress2County}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    touched.billAddress2County &&
                    errors.billAddress2County &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress2County && errors.billAddress2County
                  ? errors.billAddress2County
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress2State'
                  className={`${
                    touched.billAddress2State &&
                    errors.billAddress2State &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>State</span>
                </label>
                <input
                  id='billAddress2State'
                  type='text'
                  name='billAddress2State'
                  placeholder='Type here'
                  value={values.billAddress2State}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    touched.billAddress2State &&
                    errors.billAddress2State &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress2State && errors.billAddress2State
                  ? errors.billAddress2State
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress2ZipCode'
                  className={`${
                    touched.billAddress2ZipCode &&
                    errors.billAddress2ZipCode &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Zip Code</span>
                </label>
                <input
                  id='billAddress2ZipCode'
                  type='text'
                  name='billAddress2ZipCode'
                  placeholder='Type here'
                  value={values.billAddress2ZipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    touched.billAddress2ZipCode &&
                    errors.billAddress2ZipCode &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress2ZipCode && errors.billAddress2ZipCode
                  ? errors.billAddress2ZipCode
                  : null}
              </small>
            </div>
            <div className='flex flex-col'>
              <div className='w-full max-w-xs join'>
                <label
                  htmlFor='billAddress2Country'
                  className={`${
                    touched.billAddress2Country &&
                    errors.billAddress2Country &&
                    'btn-error'
                  } join-item btn w-32 max-w-xs`}
                >
                  <span className='label-text'>Country</span>
                </label>
                <input
                  id='billAddress2Country'
                  type='text'
                  name='billAddress2Country'
                  placeholder='Type here'
                  value={values.billAddress2Country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${
                    touched.billAddress2Country &&
                    errors.billAddress2Country &&
                    'border-orange-600'
                  } input input-bordered w-full max-w-xs join-item`}
                />
              </div>
              <small className='mt-1 text-orange-600 text-start ml-36'>
                {touched.billAddress2Country && errors.billAddress2Country
                  ? errors.billAddress2Country
                  : null}
              </small>
            </div>
            <div className='flex items-center px-2'>
              <h3 className=' text-[0.7rem] text-blue-400 font-semibold underline cursor-pointer md:text-lg '>
                Add More Address
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-end col-span-2 mt-4 '>
        <button
          type='submit'
          className='w-full max-w-xs text-center btn btn-square btn-success btn-outline'
        >
          Complete
          <CgArrowLongRight />
        </button>
      </div>
    </form>
  );
};

export default BillingAddressInputComponent;
