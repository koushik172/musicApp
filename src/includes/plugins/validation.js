import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as exclude
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaSpaces', alphaSpaces)
    defineRule('email', email)
    defineRule('minValue', minValue)
    defineRule('maxValue', maxValue)
    defineRule('mismatch', confirmed)
    defineRule('exclude', exclude)
    defineRule('countryExcluded', exclude)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alphaSpaces: `The field ${ctx.field} can contain only alphanumeric and space values.`,
          email: `Provide a valid email.`,
          maxValue: `Too High.`,
          minValue: `You are underage to enter.`,
          exclude: 'Not allowed.',
          countryExcluded: `Not available.`,
          mismatch: `Passwords must match`,
          tos: `You must agree to terms and conditions.`
        };

        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : "Invalid.";

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
  }
}
