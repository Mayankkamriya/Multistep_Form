import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  // Handle selection of an option
  const handleOptionSelect = (step, value) => {
    setFormData((prevData) => ({ ...prevData, [`question${step}`]: value }));

    // Automatically move to the next step if it's not the last step
    if (step < 3) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  // Move to next or previous step
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert('Form Submitted: ' + JSON.stringify(formData, null, 2));
  };

  // Step Components
  const Step1 = (
    <div className="form-step">
      <h2>Question 1: What is your favorite color?</h2>
      <div className="options">
        {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
          <label
            key={color}
            className={`option ${formData.question1 === color ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(1, color)}
          >
            <input
              type="radio"
              name="question1"
              value={color}
              checked={formData.question1 === color}
              onChange={() => handleOptionSelect(1, color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );

  const Step2 = (
    <div className="form-step">
      <h2>Question 2: What is your favorite animal?</h2>
      <div className="options">
        {['Dog', 'Cat', 'Bird', 'Fish'].map((animal) => (
          <label
            key={animal}
            className={`option ${formData.question2 === animal ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(2, animal)}
          >
            <input
              type="radio"
              name="question2"
              value={animal}
              checked={formData.question2 === animal}
              onChange={() => handleOptionSelect(2, animal)}
            />
            {animal}
          </label>
        ))}
      </div>
    </div>
  );

  const Step3 = (
    <div className="form-step">
      <h2>Question 3: What is your favorite season?</h2>
      <div className="options">
        {['Spring', 'Summer', 'Fall', 'Winter'].map((season) => (
          <label
            key={season}
            className={`option ${formData.question3 === season ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(3, season)}
          >
            <input
              type="radio"
              name="question3"
              value={season}
              checked={formData.question3 === season}
              onChange={() => handleOptionSelect(3, season)}
            />
            {season}
          </label>
        ))}
      </div>
      <button className="btn submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );

  const steps = {
    1: Step1,
    2: Step2,
    3: Step3,
  };

  // Pagination indicator
  const renderPagination = () => (
    <div className="pagination">
      {[1, 2, 3].map((step) => (
        <span key={step} className={step === currentStep ? 'active' : ''} />
      ))}
    </div>
  );

  return (
    <div className="multi-step-form">
      <SwitchTransition>
        <CSSTransition
          key={currentStep}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          {steps[currentStep]}
        </CSSTransition>
      </SwitchTransition>

      <div className="button-container">
        {currentStep > 1 && (
          <button className="btn prev" onClick={prevStep}>
            Back
          </button>
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default MultiStepForm;


// import React, { useState } from 'react';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
// import './MultiStepForm.css';

// const MultiStepForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     question1: '',
//     question2: '',
//     question3: '',
//   });

//   // Handle selection of an option
//   const handleOptionSelect = (step, value) => {
//     setFormData((prevData) => ({ ...prevData, [`question${step}`]: value }));
//   };

//   // Move to next or previous step
//   const nextStep = () => {
//     if (currentStep < 3) setCurrentStep(currentStep + 1);
//     else alert('Form Submitted');
//   };
//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   // Step Components
//   const Step1 = (
//     <div className="form-step">
//       <h2>Question 1: What is your favorite color?</h2>
//       <div className="options">
//         {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
//           <label
//             key={color}
//             className={`option ${formData.question1 === color ? 'selected' : ''}`}
//             onClick={() => handleOptionSelect(1, color)}
//           >
//             <input
//               type="radio"
//               name="question1"
//               value={color}
//               checked={formData.question1 === color}
//               onChange={() => handleOptionSelect(1, color)}
//             />
//             {color}
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const Step2 = (
//     <div className="form-step">
//       <h2>Question 2: What is your favorite animal?</h2>
//       <div className="options">
//         {['Dog', 'Cat', 'Bird', 'Fish'].map((animal) => (
//           <label
//             key={animal}
//             className={`option ${formData.question2 === animal ? 'selected' : ''}`}
//             onClick={() => handleOptionSelect(2, animal)}
//           >
//             <input
//               type="radio"
//               name="question2"
//               value={animal}
//               checked={formData.question2 === animal}
//               onChange={() => handleOptionSelect(2, animal)}
//             />
//             {animal}
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const Step3 = (
//     <div className="form-step">
//       <h2>Question 3: What is your favorite season?</h2>
//       <div className="options">
//         {['Spring', 'Summer', 'Fall', 'Winter'].map((season) => (
//           <label
//             key={season}
//             className={`option ${formData.question3 === season ? 'selected' : ''}`}
//             onClick={() => handleOptionSelect(3, season)}
//           >
//             <input
//               type="radio"
//               name="question3"
//               value={season}
//               checked={formData.question3 === season}
//               onChange={() => handleOptionSelect(3, season)}
//             />
//             {season}
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const steps = {
//     1: Step1,
//     2: Step2,
//     3: Step3,
//   };

//   // Pagination indicator
//   const renderPagination = () => (
//     <div className="pagination">
//       {[1, 2, 3].map((step) => (
//         <span key={step} className={step === currentStep ? 'active' : ''} />
//       ))}
//     </div>
//   );

//   return (
//     <div className="multi-step-form">
//       <SwitchTransition>
//         <CSSTransition
//           key={currentStep}
//           timeout={300}
//           classNames="fade"
//           unmountOnExit
//         >
//           {steps[currentStep]}
//         </CSSTransition>
//       </SwitchTransition>

//       <div className="button-container">
//         {currentStep > 1 && (
//           <button className="btn prev" onClick={prevStep}>
//             Back
//           </button>
//         )}
//         {currentStep < 3 && (
//           <button className="btn next" onClick={nextStep}>
//             Next
//           </button>
//         )}
//       </div>

//       {renderPagination()}
//     </div>
//   );
// };

// export default MultiStepForm;
