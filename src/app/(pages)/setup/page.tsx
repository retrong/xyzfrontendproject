"use client"
import React from 'react';
import Form from './_setupComponets/generalInfoForm';
import Stepper from './_setupComponets/stepper';

export default function Dashboard() {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
  return (
    <div>
        {/* Dashboard
        <Stepper steps={steps} />
        <form action="">
            <button type='submit'>Submit</button>
        </form> */}
        <Form />

    </div>
  )
}
