import Colors from "Assets/Colors"
import {
  BackButton,
  Error,
  Footer,
  MobileContainer,
  MobileHeader,
  MobileInnerWrapper,
  SubmitButton,
  TermsOfServiceCheckbox,
} from "Components/Authentication/commonElements"
import { checkEmail } from "Components/Authentication/helpers"
import { FormComponentType } from "Components/Authentication/Types"
import { MobileSignUpValidator } from "Components/Authentication/Validators"
import Icon from "Components/Icon"
import Input from "Components/Input"
import { ProgressIndicator } from "Components/ProgressIndicator"
import { Step, Wizard } from "Components/Wizard"
import React from "react"

export const MobileSignUpForm: FormComponentType = props => {
  const steps = [
    <Step
      validationSchema={MobileSignUpValidator.email}
      onSubmit={(values, actions) =>
        checkEmail({ values, actions, shouldExist: false })
      }
    >
      {({
        wizard,
        form: { errors, touched, values, handleChange, handleBlur, setTouched },
      }) => (
        <Input
          block
          error={errors.email}
          placeholder="Enter your email address"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          setTouched={setTouched}
          quick
        />
      )}
    </Step>,
    <Step validationSchema={MobileSignUpValidator.password}>
      {({
        wizard,
        form: { errors, touched, values, handleChange, handleBlur, setTouched },
      }) => (
        <Input
          block
          error={errors.password}
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          setTouched={setTouched}
          quick
          showPasswordMessage
        />
      )}
    </Step>,
    <Step validationSchema={MobileSignUpValidator.name}>
      {({
        wizard,
        form: { errors, touched, values, handleChange, handleBlur, setTouched },
      }) => (
        <Input
          block
          error={errors.name}
          name="name"
          label="Name"
          placeholder="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          setTouched={setTouched}
          quick
        />
      )}
    </Step>,
    <Step validationSchema={MobileSignUpValidator.accepted_terms_of_service}>
      {({
        wizard,
        form: { errors, touched, values, handleChange, handleBlur, setTouched },
      }) => (
        <TermsOfServiceCheckbox
          error={
            touched.accepted_terms_of_service &&
            errors.accepted_terms_of_service
          }
          checked={values.accepted_terms_of_service}
          value={values.accepted_terms_of_service}
          type="checkbox"
          name="accepted_terms_of_service"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </Step>,
  ]
  return (
    <Wizard steps={steps} onComplete={props.handleSubmit}>
      {context => {
        const {
          form: { handleSubmit, status },
          wizard,
        } = context
        const { currentStep, isLastStep } = wizard

        return (
          <MobileContainer>
            <ProgressIndicator percentComplete={wizard.progressPercentage} />
            <MobileInnerWrapper>
              <BackButton onClick={wizard.previous as any}>
                <Icon
                  name="chevron-left"
                  color={Colors.graySemibold}
                  fontSize="16px"
                />
              </BackButton>
              <MobileHeader>Sign up</MobileHeader>
              {currentStep}
              {status && !status.success && <Error show>{status.error}</Error>}
              <SubmitButton
                disabled={!wizard.shouldAllowNext}
                onClick={handleSubmit as any}
              >
                {isLastStep ? "Create account" : "Next"}
              </SubmitButton>
              <Footer
                mode="signup"
                onFacebookLogin={props.onFacebookLogin}
                onTwitterLogin={props.onTwitterLogin}
                handleTypeChange={props.handleTypeChange}
              />
            </MobileInnerWrapper>
          </MobileContainer>
        )
      }}
    </Wizard>
  )
}
