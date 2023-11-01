'use client';

import { Span } from 'next/dist/trace';
import { useState } from 'react';

type formData = {
  name: string;
  address: string;
  phoneNumb: string;
  age: number;
};

const defaultForm: formData = {
  name: '',
  address: '',
  phoneNumb: '',
  age: 0,
};

const disabled = false;

export default function FormsComponent() {
  const [formInput, setFormInput] = useState(defaultForm);

  const onChange = (e: any) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-10">
      <p className="text-center my-4">Forms</p>

      <form>
        {/* Name */}
        <div className="grid grid-cols-2 mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={formInput.name}
            onChange={onChange}
            name="name"
            id="name"
          />
          {!formInput.name && (
            <span className="text-sm text-red-500">Please fill the data</span>
          )}
        </div>

        {/* Address */}
        <div className="grid grid-cols-2 mt-3">
          <label htmlFor="address">Address</label>
          <textarea
            value={formInput.address}
            onChange={onChange}
            name="address"
            id="address"
          />
          {!formInput.address && (
            <span className="text-sm text-red-500">Please fill the data</span>
          )}
        </div>

        {/* PhoneNumb */}
        <div className="grid grid-cols-2 mt-3">
          <label htmlFor="phoneNumb">Phone Number</label>
          <input
            type="text"
            value={formInput.phoneNumb}
            onChange={onChange}
            name="phoneNumb"
            id="phoneNumb"
          />
          {!formInput.phoneNumb && (
            <span className="text-sm text-red-500">Please fill the data</span>
          )}
          {!new RegExp('^[0-9]*$').test(formInput.phoneNumb) && (
            <span className="text-sm text-red-500">
              Please fill the correct data
            </span>
          )}
        </div>

        {/* Age */}
        <div className="grid grid-cols-2 mt-3">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={formInput.age}
            onChange={onChange}
            name="age"
            id="age"
          />
          {(formInput.age === 0 || !formInput.age) && (
            <span className="text-sm text-red-500">Please fill the data</span>
          )}
        </div>
        <div className="mt-5">
          <button
            type="submit"
            disabled={
              formInput.name == '' ||
              formInput.address == '' ||
              formInput.age == 0 ||
              formInput.phoneNumb == ''
            }
            className="bg-yellow-500 p-1 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
